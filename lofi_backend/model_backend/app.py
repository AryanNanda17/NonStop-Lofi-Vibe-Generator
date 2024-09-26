import json
import torch
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import uvicorn
from typing import List
from models.Lofi_VAEs_Model.model.lofi2lofi_model import Decoder as Lofi2LofiDecoder
from lofi2lofi_generate import decode

device = "cpu"
app = FastAPI()

lofi2lofi_checkpoint = "./models/Lofi_VAEs_Model/model/lofi2lofi-decoder.pth"
print("Loading lofi model...", end="")
lofi2lofi_model = Lofi2LofiDecoder(device=device)
lofi2lofi_model.load_state_dict(torch.load(lofi2lofi_checkpoint, map_location=device))
print(f"Loaded {lofi2lofi_checkpoint}.")
lofi2lofi_model.to(device)
lofi2lofi_model.eval()

class DecodeInput(BaseModel):
    input: List[float]


@app.get("/")
async def home():
    return {"message": "Server running"}

@app.post("/decode")
async def decode_input(data: DecodeInput):
    number_list = data.input
    json_output = decode(lofi2lofi_model, torch.tensor([number_list]).float())
    return JSONResponse(content=json_output)

if __name__ == '__main__':
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)