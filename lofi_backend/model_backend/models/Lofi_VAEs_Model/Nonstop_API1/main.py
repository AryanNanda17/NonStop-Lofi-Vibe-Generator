#!/usr/bin/env python3
import uvicorn
import json
import tensorflow as tf
import numpy as np
from fastapi import FastAPI, Query
from tensorflow import keras
from music21 import *
from Generate import MelodyGenerator 
app = FastAPI()

@app.get("/ping")
async def ping():
    return "This is Lofi Vibe"

@app.get("/predict")
async def predict(num_sequences: int = Query(..., description="Number of sequences to generate")):
    mg=MelodyGenerator()
    seed = "67 _ 67 _ 67 _ _ 65 64 _ 64 _ 64 _ _"
    seed2 = "67 _ _ _ _ _ 65 _ 64 _ 62 _ 60 _ _ _"
    melody = mg.generate_melody(seed,num_sequences , num_sequences, 0.3)
    print(melody)
    mg.save_melody(melody)    

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)