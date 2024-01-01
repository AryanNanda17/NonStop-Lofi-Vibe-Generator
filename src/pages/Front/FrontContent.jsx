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
    </div>
  );
};

export default FrontContent;
