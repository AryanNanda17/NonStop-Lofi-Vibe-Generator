import React from "react";
import Navbar from "../../components/Navbar";

const Developer = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white flex flex-col">
            <Navbar />
            <div className="text-center tracking-wider p-6 sm:p-10 lg:p-28">
                <h1 className="text-4xl font-bold uppercase mb-12 lg:mb-16 animate-fadeIn">
                    About Us
                </h1>

                <div className="text-left text-xl space-y-16 max-w-5xl mx-auto lg:space-y-24">
                    {/* Who Are We Section */}
                    <section>
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-blue-300">
                            Who Are We
                        </h2>
                        <p className="leading-relaxed text-lg text-gray-300">
                            LofiVibe is an interactive web application that allows
                            users to generate original Lofi music, play nonstop piano
                            music, and experience music with visuals. The application
                            integrates advanced machine learning models to provide a
                            unique and immersive musical experience.
                        </p>
                    </section>

                    {/* Features Section */}
                    <section>
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-blue-300">
                            Features
                        </h2>
                        <ul className="list-disc list-inside space-y-6 text-lg">
                            <li className="hover:text-blue-400 transition duration-300">
                                <span className="text-2xl font-semibold text-yellow-300">
                                    LoFi Music Generation
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-gray-300">
                                    Generate original Lofi music using Variational
                                    Autoencoders (VAEs) through a latent space. Each
                                    session offers unique possibilities for exploration
                                    and creativity.
                                </p>
                            </li>
                            <li className="hover:text-blue-400 transition duration-300">
                                <span className="text-2xl font-semibold text-yellow-300">
                                    Non-Stop Music Playback
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-gray-300">
                                    Enjoy nonstop piano music generated using Long
                                    Short-Term Memory (LSTM) networks for continuous,
                                    uninterrupted listening.
                                </p>
                            </li>
                            <li className="hover:text-blue-400 transition duration-300">
                                <span className="text-2xl font-semibold text-yellow-300">
                                    Music Visualization
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-gray-300">
                                    Experience captivating visuals that enhance the
                                    listening experience. The visuals are dynamically
                                    generated to match the rhythm and flow of the music.
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* Deep Learning Models Section */}
                    <section>
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-blue-300">
                            Deep Learning Models
                        </h2>
                        <ul className="list-disc list-inside space-y-6 text-lg">
                            <li className="hover:text-blue-400 transition duration-300">
                                <span className="text-2xl font-semibold text-yellow-300">
                                    LoFi Music Generation
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-gray-300">
                                    Using a Variational Autoencoder (VAE), the system
                                    generates original Lofi music by exploring the
                                    latent space representation. The music evolves
                                    based on user inputs, creating a personalized
                                    experience.
                                </p>
                            </li>
                            <li className="hover:text-blue-400 transition duration-300">
                                <span className="text-2xl font-semibold text-yellow-300">
                                    Non-Stop Music Generation
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-gray-300">
                                    The non-stop piano music is generated using a Long
                                    Short-Term Memory (LSTM) network that has learned
                                    the patterns and structures from a dataset of piano
                                    music.
                                </p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Developer;
