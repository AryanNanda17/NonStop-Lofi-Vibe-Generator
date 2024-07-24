from music21 import midi, stream
s = stream.Score()
mf = midi.MidiFile()
mf.open('test_output.mid')
mf.read()
mf.close()
s.append(midi.translate.midiFileToStream(mf))
s.show('midi')