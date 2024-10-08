import React, { memo } from "react";
import Layout from "../Layout/Layout";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  { to: "/bang", image: "./images/bigbang.PNG", alt: "bigbang", title: "Big Bang" },
  { to: "/brain", image: "./images/brain.PNG", alt: "brain", title: "Brain" },
  { to: "/wave", image: "./images/wave.PNG", alt: "wave", title: "Wave" },
];

const Main = memo(() => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Layout>
        <h1 className="text-center text-4xl tracking-wider p-24">
          Dive into the world of music with these amazing music experiences
        </h1>

        <div className="grid p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto max-w-screen-xl">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.to} {...experience} />
          ))}
        </div>
      </Layout>
    </div>
  );
});

export default Main;
