import React, { useEffect, useRef } from "react";
import "./front.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FrontContent = () => {
  const refs = useRef([]);
  const container = useRef(null);
  const phrase1 =
    " Step into a world where music meets emotion in perfect harmony. LofiVibe harnesses the power of deep learning wizardry to curate a melodic journey just for you. Say goodbye to playlists, and hello to tunes tailored to your every mood.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.6,
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: `+=${container.current.offsetHeight}`,
        scrub: true,
      },
    });
  };
  const splitWords = () => {
    let body = [];
    phrase1.split(" ").map((word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
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
    <div className="bg-black">
      <div
        ref={container}
        className="text-white p-8 flex justify-center items-center"
      >
        <div className="text-7xl uppercase body tracking-wider mt-64">
          {splitWords()}
        </div>
      </div>
      <div className="text-white p-5">
        <div>
          <h1 className="text-5xl heading bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
            Soulful Lofi Beats
          </h1>
          <p className="text-2xl mt-3 mb-3 text-gray-500">
            Immerse yourself in an ever-expanding collection of mesmerizing Lofi
            tracks meticulously crafted by our AI models. Let the gentle rhythms
            and mellow tunes set the perfect ambiance for relaxation.
          </p>
        </div>
        <div>
          <h1 className="text-5xl heading bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
            Infinite Chill Vibes
          </h1>
          <p className="text-2xl mt-3 mb-3 text-gray-500">
            Explore an endless stream of chill-out music that adapts to your
            mood and setting. Whether you're studying, working, or unwinding,
            LofiVibe delivers the perfect soundtrack for every moment.
          </p>
        </div>
        <div>
          <h1 className="text-5xl heading bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
            Personalized Playlists
          </h1>
          <p className="text-2xl mt-3 mb-3 text-gray-500">
            Tailor your listening experience. Curate playlists that resonate
            with your preferences, discovering new AI-generated tracks that
            match your unique taste in Lofi music.
          </p>
        </div>
        <div>
          <h1 className="text-5xl heading bg-gradient-to-r from-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
            Dive into the LofiVibe
          </h1>
          <p className="text-2xl mt-3 mb-3 text-gray-500">
            LofiVibe is your portal to a realm where technology meets
            tranquility. Step into a universe where relaxation is an art form
            and where melodies are woven by algorithms, delivering a unique and
            serene musical journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontContent;
