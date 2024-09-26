#!/usr/bin/env python3
import uvicorn
import json
import torch
import numpy as np
from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
from lofi2lofi_model import Decoder as Lofi2LofiDecoder
from lofi2lofi_generate import decode
app = FastAPI()

device = 'cpu'
lofi2lofi_checkpoint = "./checkpoints/lofi2lofi_decoder.pth"
print("Loading lofi model...", end=" ")
print("Loading lofi model...", end=" ")
lofi2lofi_model = Lofi2LofiDecoder(device=device)
lofi2lofi_model.load_state_dict(torch.load(lofi2lofi_checkpoint, map_location=device))
print(f"Loaded {lofi2lofi_checkpoint}.")
lofi2lofi_model.to(device)
lofi2lofi_model.eval()

@app.get("/ping")
async def ping():
    return "This is Lofi Vibe"

@app.get("/predict")
async def predict():
    return "Hello! Everyone"

@app.get("/decode")
async def decode_input(input: str):
    number_list = json.loads(input)
    json_output = decode(lofi2lofi_model, torch.tensor([number_list]).float())
    return JSONResponse(content=json_output, headers={"Access-Control-Allow-Origin": "*"})
# @app.get("/decode")
# async def decode_input():
#     # Generate a random 100x32 array
#     input_data = np.random.rand(1, 100)

#     # Perform decoding using the model
#     json_output = decode(lofi2lofi_model, torch.tensor(input_data).float())

#     return JSONResponse(content=json_output, headers={"Access-Control-Allow-Origin": "*"})

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)