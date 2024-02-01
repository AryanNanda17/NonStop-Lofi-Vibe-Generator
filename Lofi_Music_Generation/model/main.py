from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from keras.models import load_model
from music21 import note, chord, stream, environment

app = Flask(__name__)
CORS(app)

# Load the pre-trained music generation model
model = load_model('lofi.h5')

def generate_music(input_sequence):
    # Map pitch names to integers
    pitchnames = sorted(set(item for item in input_sequence))
    note_to_int = dict((note, number) for number, note in enumerate(pitchnames))

    # Generate music sequence
    generated_music = []
    pattern = [note_to_int[char] for char in input_sequence]
    for _ in range(100):
        prediction_input = np.reshape(pattern, (1, len(pattern), 1))
        prediction_input = prediction_input / float(len(pitchnames))

        prediction = model.predict(prediction_input, verbose=0)
        index = np.argmax(prediction)

        result = pitchnames[index]
        generated_music.append(result)

        pattern.append(index)
        pattern = pattern[1:len(pattern)]

    return generated_music

@app.route('/generate_music', methods=['POST'])
def generate_music_route():
    try:
        request_data = request.get_json()
        input_sequence = request_data.get('input_sequence')

        if not input_sequence:
            raise ValueError('Input sequence is required.')

        generated_music = generate_music(input_sequence)
        
        # Convert generated music to MIDI file
        output_notes = []
        offset = 0
        for pattern in generated_music:
            if ('.' in pattern) or pattern.isdigit():
                notes_in_chord = pattern.split('.')
                notes = [note.Note(int(current_note)) for current_note in notes_in_chord]
                new_chord = chord.Chord(notes)
                new_chord.offset = offset
                output_notes.append(new_chord)
            else:
                new_note = note.Note(pattern)
                new_note.offset = offset
                output_notes.append(new_note)
            offset += 0.5

        us = environment.UserSettings()
        us.getSettingsPath()
        s = stream.Stream(output_notes)
        midi_filepath = "static/generated_music.mid"
        mf = s.write('midi', fp=midi_filepath)

        return jsonify({'message': 'Music Generated Successfully', 'midi_filepath': midi_filepath})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
