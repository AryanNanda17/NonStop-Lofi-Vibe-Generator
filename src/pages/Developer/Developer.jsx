import React from "react";
import Navbar from "../../components/Navbar";
import { FaMusic, FaBrain } from "react-icons/fa";

const Developer = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="text-center text-4xl font-bold tracking-wider pt-24">
        <h1 className="animate-fade-in">About Us</h1>
      </div>
      <div className="px-6 lg:px-28 text-left mt-10">
        {/* Who Are We Section */}
        <div className="mb-12">
          <h1 className="text-3xl bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text font-bold">
            <FaMusic className="inline mr-2 text-white" /> Who Are We
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            LofiVibe is an interactive web application that allows users to
            generate original Lofi music, play nonstop piano music, and
            experience music with visuals. The application integrates advanced
            machine learning models to provide a unique and immersive musical
            experience.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h1 className="text-3xl bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text font-bold">
            Features:
          </h1>
          <ul className="list-disc text-2xl mt-5 ml-5 space-y-8">
            <li className="group">
              <span className="font-semibold">LoFi Music Generation</span>
              <p className="text-lg mt-1 group-hover:text-gray-400 transition-all duration-300">
                Users can generate original Lofi music using Variational
                Autoencoders (VAEs) through a latent space. The generated Lofi
                music is unique to each user session, providing endless
                possibilities for exploration and creativity.
              </p>
            </li>
            <li className="group">
              <span className="font-semibold">Non-Stop Music Playback</span>
              <p className="text-lg mt-1 group-hover:text-gray-400 transition-all duration-300">
                Users can enjoy nonstop piano music playback generated using
                Long Short-Term Memory (LSTM) networks.
              </p>
            </li>
            <li className="group">
              <span className="font-semibold">Music Visualization</span>
              <p className="text-lg mt-1 group-hover:text-gray-400 transition-all duration-300">
                The music visualization feature uses audio analysis and
                visualization techniques to create captivating visuals that
                accompany the music. The visuals are synchronized with the music
                to enhance the listening experience.
              </p>
            </li>
          </ul>
        </div>

        {/* Deep Learning Models Section */}
        <div>
          <h1 className="text-3xl bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text font-bold">
            <FaBrain className="inline mr-2 text-white" /> Deep Learning Models:
          </h1>
          <ul className="list-disc text-2xl mt-5 ml-5 space-y-8">
            <li className="group">
              <span className="font-semibold">LoFi Music Generation</span>
              <p className="text-lg mt-1 group-hover:text-gray-400 transition-all duration-300">
                The LoFi music generation feature uses a Variational Autoencoder
                (VAE) to generate original Lofi music. The VAE is trained on a
                dataset of Lofi music to learn the latent space representation
                of the music. Users can explore the latent space to generate
                unique and original Lofi music based on their preferences.
              </p>
            </li>
            <li className="group">
              <span className="font-semibold">Non-Stop Music Generation</span>
              <p className="text-lg mt-1 group-hover:text-gray-400 transition-all duration-300">
                The non-stop music generation feature uses a Long Short-Term
                Memory (LSTM) network to generate piano music. The LSTM network
                is trained on a dataset of piano music to learn the patterns and
                structures of music sequences. The model generates music based
                on learned patterns.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Developer;
