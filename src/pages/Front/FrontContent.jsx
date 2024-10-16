import { useEffect, useRef } from "react";
import "./front.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const FrontContent = () => {
  const refs = useRef([]);
  const container = useRef(null);
  const audioRef = useRef(new Audio("/path/to/your/lofi-sample.mp3"));
  const phrase1 =
    "Step into a world where music meets emotion in perfect harmony. LofiVibe harnesses the power of deep learning wizardry to curate a melodic journey just for you. Say goodbye to playlists, and hello to tunes tailored to your every mood.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();

    return () => {
      refs.current = [];
      audioRef.current.pause();
    };
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.6,
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: `+=${container.current.offsetHeight - 230}`,
        scrub: true,
      },
    });
  };

  const splitWords = () => {
    let body = [];
    phrase1.split(" ").map((word, index) => {
      const letters = splitLetters(word);
      body.push(
        <motion.p
          className="bg-gradient-to-r from-purple-400 to-pink-600 inline-block text-transparent bg-clip-text"
          key={`word_${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {letters}
        </motion.p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className="bg-black min-h-auto">
      <div
        ref={container}
        className="text-white p-8 flex justify-center items-center"
      >
        <div className="text-4xl uppercase body tracking-wider mt-64">
          {splitWords()}
        </div>
      </div>
      <div className="py-20 px-8" id="cont">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {[
              {
                img: "./images/imgg3.webp",
                alt: "lofi",
                title: "Soulful Lofi Beats",
                description:
                  "Immerse yourself in an ever-expanding collection of mesmerizing Lofi tracks meticulously crafted by our AI models. Let the gentle rhythms and mellow tunes set the perfect ambiance for relaxation.",
              },
              {
                img: "./images/imgg4.avif",
                alt: "chill",
                title: "Infinite Chill Vibes",
                description:
                  "Explore an endless stream of chill-out music that adapts to your mood and setting. Whether you're studying, working, or unwinding, LofiVibe delivers the perfect soundtrack for every moment.",
              },
              {
                img: "./images/imgg1.jpg",
                alt: "img-1",
                title: "Personalized Playlists",
                description:
                  "Tailor your listening experience. Curate playlists that resonate with your preferences, discovering new AI-generated tracks that match your unique taste in Lofi music.",
              },
              {
                img: "./images/imgg8.avif",
                alt: "portal",
                title: "Dive into the LofiVibe",
                description:
                  "LofiVibe is your portal to a realm where technology meets tranquility. Step into a universe where relaxation is an art form and where melodies are woven by algorithms, delivering a unique and serene musical journey.",
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900 to-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <img
                    src={section.img}
                    alt={section.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white text-center px-4">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-purple-200 text-lg">
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default FrontContent;
