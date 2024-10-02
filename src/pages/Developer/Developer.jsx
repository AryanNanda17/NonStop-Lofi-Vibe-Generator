import React from "react";
import Navbar from "../../components/Navbar";

const Developer = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="text-center text-4xl tracking-wider p-28">
                <h1>About</h1>
                <div className="text-left text-xl mt-10">
                    <h1 className="text-3xl">Who Are We</h1>
                    <p className="mt-5">
                        LofiVibe is an interactive web application that allows
                        users to generate original Lofi music, play nonstop
                        piano music, and experience music with visuals. The
                        application integrates advanced machine learning models
                        to provide a unique and immersive musical experience.
                    </p>
                    <h1 className="text-3xl mt-10">Features:</h1>
                    <ul className="list-disc text-2xl mt-5 ml-5">
                        <li className="mt-3">
                            LoFi Music Generation
                            <p className="text-lg mt-1">
                                Users can generate original Lofi music using
                                Variational Autoencoders (VAEs) through a latent
                                space. The generated Lofi music is unique to
                                each user session, providing endless
                                possibilities for exploration and creativity.
                            </p>
                        </li>
                        <li className="mt-3">
                            Non-Stop Music Playback
                            <p className="text-lg mt-1">
                                Users can enjoy nonstop piano music playback
                                generated using Long Short-Term Memory (LSTM)
                                networks.
                            </p>
                        </li>
                        <li className="mt-3">
                            Music Experience with Visuals
                            <p className="text-lg mt-1">
                                The music experience page offers users the
                                opportunity to immerse themselves in music
                                accompanied by captivating visuals. The visuals
                                are synchronized with the music, enhancing the
                                overall listening experience. Users can choose
                                from a variety of visual themes and effects to
                                accompany the music, creating a visually
                                stunning and dynamic environment.
                            </p>
                        </li>
                    </ul>
                    <h1 className="text-3xl mt-10">Deep Learning Models:</h1>
                    <ul className="list-disc text-2xl mt-5 ml-5">
                        <li className="mt-3">
                            LoFi Music Generation:
                            <p className="text-lg mt-1">
                                The LoFi music generation feature uses a
                                Variational Autoencoder (VAE) to generate
                                original Lofi music. The VAE is trained on a
                                dataset of Lofi music to learn the latent space
                                representation of the music. Users can explore
                                the latent space to generate unique and original
                                Lofi music based on their preferences and
                                inputs.
                            </p>
                        </li>
                        <li className="mt-3">
                            Non-Stop Music Generation:
                            <p className="text-lg mt-1">
                                The non-stop music generation feature uses a
                                Long Short-Term Memory (LSTM) network to
                                generate piano music. The LSTM network is
                                trained on a dataset of piano music to learn the
                                patterns and structures of music sequences. The
                                model generates music sequences based on the
                                learned patterns, allowing for the creation of
                                new and original music.
                            </p>
                        </li>
                        <li className="mt-3">
                            Music Visualization:
                            <p className="text-lg mt-1">
                                The music visualization feature uses audio
                                analysis and visualization techniques to create
                                captivating visuals that accompany the music.
                                The visuals are synchronized with the music to
                                enhance the listening experience and create a
                                dynamic and immersive environment for users.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Developer;
