#!/usr/bin/env python3
import uvicorn
import json
import tensorflow as tf
import numpy as np
from fastapi import FastAPI, Query
from tensorflow import keras
from music21 import *
app = FastAPI()

# MODEL = tf.keras.models.load_model("/Users/Aryan/Documents/Projects/NonStop-Lofi-Vibe-Generator/API/Saved_Models/1") 
model = tf.keras.models.load_model("./Saved_Models/2") 

network_input_file_path = './Saved_Models/network_input.npy'
pitchnames_file_path = './Saved_Models//pitchnames.json'

network_input = np.load(network_input_file_path)
with open(pitchnames_file_path, 'r') as json_file:
        pitchnames = json.load(json_file)
n_vocab = len(pitchnames)
# print(network_input)
# print(pitchnames)
@app.get("/ping")
async def ping():
    return "This is Lofi Vibe"

@app.get("/predict")
async def predict(num_sequences: int = Query(..., description="Number of sequences to generate")):
    start = np.random.randint(0, len(network_input) - 1)
    int_to_note = dict((number, note) for number, note in enumerate(pitchnames))
    pattern = network_input[start]
    prediction_output = []
    offset = 0
    output_notes = []
    for _ in range(num_sequences):  # Generate the specified number of sequences
        prediction_input = np.reshape(pattern, (1, len(pattern), 1))
        prediction_input = prediction_input / float(n_vocab)
        prediction = model.predict(prediction_input, verbose=0)
        index = np.argmax(prediction)
        try:
            result = int_to_note[index]
        except KeyError:
            result = "C4"
        prediction_output.append(result)
        ind = np.asarray([index])
        pattern = np.append(pattern, ind)
        pattern = pattern[1:len(pattern)]
        if ('.' in result) or result.isdigit():
            notes_in_chord = result.split('.')
            notes = []
            for current_note in notes_in_chord:
                new_note = note.Note(int(current_note))
                new_note.storedInstrument = instrument.Violin()
                notes.append(new_note)
            new_chord = chord.Chord(notes)
            new_chord.offset = offset
            output_notes.append(new_chord)
        else:
            rounded_pitch = round(pattern[0])
            if rounded_pitch in int_to_note and '.' not in int_to_note[rounded_pitch] and '' not in int_to_note[
                rounded_pitch]:
                new_note = note.Note(int_to_note[rounded_pitch])
                new_note.offset = offset
                new_note.storedInstrument = instrument.Violin()
                output_notes.append(new_note)
        offset += 0.5

    midi_stream = stream.Stream(output_notes)
    midi_stream.write('midi', fp='test_output.mid')
    return {"message": f"{num_sequences} sequences generated successfully"}
    # return "Hello! Everyone"

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)