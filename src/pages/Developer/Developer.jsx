/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import { FaMusic, FaBrain } from "react-icons/fa";

const Developer = () => {
    return (
        <div className="bg-black min-h-screen text-justify tracking-wider leading-relaxed pt-32">
            <Navbar />
            <div className="border-x border-white rounded-md w-[97%] mx-auto p-10">
                <div>
                    <div className="">
                        <h1 className="font-medium text-3xl text-white">Who Are We?</h1>
                        <p className="text-gray-400 mt-5">
                            LofiVibe is an interactive web application that allows
                            users to generate original Lofi music, play nonstop
                            piano music, and experience music with visuals. The
                            application integrates advanced machine learning models
                            to provide a unique and immersive musical experience.
                        </p>
                    </div>

                    <div className="flex items-start justify-center gap-x-20 mt-10"> 
                        <div className="">
                            <h1 className="text-3xl font-medium text-white">Features</h1>
                            <div className="flex flex-col justify-center gap-y-8 text-gray-400">
                                <p className="mt-3">
                                        Users can generate original Lofi music using
                                        Variational Autoencoders (VAEs) through a latent
                                        space. The generated Lofi music is unique to
                                        each user session, providing endless
                                        possibilities for exploration and creativity.
                                </p>

                                <p className="">
                                        Users can enjoy nonstop piano music playback
                                        generated using Long Short-Term Memory (LSTM)
                                        networks.
                                </p>

                                <p className="">
                                        The music visualization feature uses audio
                                        analysis and visualization techniques to create
                                        captivating visuals that accompany the music.
                                        The visuals are synchronized with the music to
                                        enhance the listening experience and create a
                                        dynamic and immersive environment for users.
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-3xl font-medium text-white">Deep Learning Models</h1>
                            <div className="flex flex-col justify-center gap-y-8 text-gray-400">
                                <p className="mt-3">
                                    The LoFi music generation feature uses a
                                    Variational Autoencoder (VAE) to generate
                                    original Lofi music. The VAE is trained on a
                                    dataset of Lofi music to learn the latent space
                                    representation of the music. Users can explore
                                    the latent space to generate unique and original
                                    Lofi music based on their preferences and
                                    inputs.
                                </p>

                                <p className="">
                                    The non-stop music generation feature uses a
                                    Long Short-Term Memory (LSTM) network to
                                    generate piano music. The LSTM network is
                                    trained on a dataset of piano music to learn the
                                    patterns and structures of music sequences. The
                                    model generates music sequences based on the
                                    learned patterns, allowing for the creation of
                                    new and original music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  );
};

export default Developer;
