# LOFI Model

Lo-fi music has rather simple characteristics (short loops of chord progressions, simple melodies, no dynamics, etc.) which makes it an easy target for computational music generation. We obtained a dataset containing thousands of songs, each sample containing chord progressions, melodies, and other musical parameters, and trained a VAE models (Lofi2Lofi) to generate a latent space of musical parameters to sample from. These musical parameters are:

* **Chords**: an integer sequence of a chord progression in Roman numeral notation (0-8; 0=rest; 8=end)

* **Melodies**: an integer sequence of eight notes for each chord, by scale degree over two octaves (0-15; 0=rest)

* **Tempo**: a continuous value between [0, 1] that indicates the tempo, can be scaled to BPM

* **Key**: an integer between 1 and 12 denoting the musical key, by chromatic scale degree

* **Mode**: an integer between 1 and 7 corresponding to one of the seven Greek modes

* **Valence**: a continuous value between [0, 1] that denotes musical positiveness

* **Energy**: a continuous value between [0, 1] that denotes a perceptual measure of intensity and activity

A sample can thus be represented in JSON as such:

```json
{
  "title": "#338934052871945450670672",
  "key": 3,
  "mode": 1,
  "bpm": 75,
  "energy": 0.501,
  "valence": 0.381,
  "chords": [6, 7, 1, 4, 5, 1],
  "melodies": [
    [0, 6, 6, 6, 5, 6, 5, 6],
    [5, 6, 2, 0, 2, 0, 2, 0],
    [0, 5, 0, 5, 0, 5, 0, 5],
    [0, 6, 6, 6, 6, 6, 6, 6],
    [6, 5, 5, 5, 5, 5, 5, 2],
    [0, 5, 0, 0, 0, 0, 0, 0]
  ]
}
```

## Model

We trained two VAEs, Lofi2Lofi and Lyrics2Lofi.

### Lofi2Lofi

Lofi2Lofi is a symmetrical VAE. Each dataset sample is encoded in the same format as the output.

![](https://svgshare.com/i/ZF5.svg)

The architecture of the decoder is easier to look at if we unroll the LSTMs:

![](https://svgshare.com/i/ZEy.svg)

This architecture ensures that melodies are conditioned on the chord and each note is conditioned on the previous notes. In music, context is very important, and we hope to reflect that in our model.

## Running the model

First, follow the instructions in the `dataset` folder to build the dataset.

To run Lofi2Lofi:

1. Run `lofi2lofi_train.py`


