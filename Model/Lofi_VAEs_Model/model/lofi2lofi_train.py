import os

from lofi2lofi_dataset import Lofi2LofiDataset
from lofi2lofi_model import Lofi2LofiModel
from train import train

if __name__ == '__main__':
    dataset_folder = "processed"
    dataset_files = os.listdir(dataset_folder)

    dataset = Lofi2LofiDataset(dataset_folder, dataset_files)
    model = Lofi2LofiModel()

    train(dataset, model, "lofi2lofi")
