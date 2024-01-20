import React, { useEffect, useState } from "react";

const LoadProgress = () => {
  const [facts, setFacts] = useState(["Fact 1"]);
  const [randomFact, setRandomFact] = useState("");
  const [loading, setLoading] = useState(0);

  const displayRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const fetchedFacts = ["Origin: Lo-fi music, short for low fidelity, originated in the 1950s and was initially associated with the limitations of recording equipment.",
"Aesthetic: It embraces imperfections and a raw, unpolished sound, often characterized by background noise, vinyl crackle, and tape hiss.",
"Genres: Lo-fi extends across various genres, including hip-hop, jazz, ambient, and electronic music.",
"Chillhop: A sub-genre of lo-fi, chillhop combines hip-hop beats with the soothing, laid-back vibe of lo-fi music.",
"Internet Culture: Lo-fi gained popularity through online streaming platforms like YouTube and has become synonymous with study and relaxation playlists.",
"24/7 Livestreams: Many lo-fi channels on platforms like YouTube offer 24/7 live streams, providing a constant flow of calming music.",
"Nujabes Influence: The late Japanese producer Nujabes is often credited with popularizing lo-fi hip-hop and influencing the genre's growth.",
"Sampling: Lo-fi artists frequently use samples from old records, movies, and other sources to create a nostalgic and unique sound.",
"DIY Ethos: The DIY (do-it-yourself) ethos is prevalent, with many artists producing and releasing music independently.",
"Community: There is a strong sense of community among lo-fi artists, often collaborating and supporting each other's work.",
"Anime Connections: Lo-fi is commonly associated with anime culture, and many tracks feature samples from anime shows and movies.",
"Beats to Relax/Study To: The beats to relax/study to meme became synonymous with lo-fi, and it reflects the music's widespread use for focus and relaxation.",
"Minimalistic Art: Lo-fi playlists often feature minimalistic and aesthetically pleasing artwork, contributing to the overall experience.",
"Global Appeal: The genre has a global following, with artists and listeners from various countries contributing to its diverse sound.",
"Instrumentation: Lo-fi music typically incorporates instruments like electric pianos, synthesizers, and drum machines.",
"Lo-fi Hip-Hop Radio Girl: The image of an anime girl studying with a cat and a cup of coffee is an iconic visual associated with lo-fi hip-hop streams.",
"No Lyrics or Minimal Vocals: Many lo-fi tracks are instrumental, allowing listeners to focus without distraction.",
"Focus and Productivity: The calming nature of lo-fi music makes it a popular choice for enhancing focus and productivity.",
"Ambient Soundscapes: Lo-fi often includes ambient sounds like rain, birdsong, or city noises, contributing to its immersive quality.",
"Bedroom Producer Scene: The genre is closely tied to the bedroom producer scene, where artists create music in the comfort of their homes.",
"Vaporwave Connection: Lo-fi shares some aesthetic elements with vaporwave, another genre known for its nostalgic and surreal vibes.",
"Vinyl Revival: The use of vinyl crackle in lo-fi music is part of the broader revival of interest in vinyl records.",
"Lo-fi Festivals: Events and festivals dedicated to lo-fi music have emerged, providing a platform for artists to showcase their work.",
"Royalty-Free Music: Many lo-fi tracks are offered as royalty-free music, making them popular choices for content creators.",
"Influence on Mainstream Music: Elements of lo-fi have found their way into mainstream music, influencing artists across genres.",
"Wellness Benefits: Lo-fi is often used in wellness practices, such as yoga and meditation, due to its calming nature.",
"Lo-fi Visualizers: Animated visualizers, often featuring looping animations, are common in lo-fi music videos.",
"Lo-fi Guitar Loops: Guitar loops, especially in a jazzy style, are frequently used in lo-fi compositions.",
"Study Girl Controversy: The use of the Study Girl image has sparked debates about copyright and intellectual property.",
"SoundCloud Origins: Many lo-fi artists initially gained recognition through platforms like SoundCloud.",
"Beat Tapes: Lo-fi artists often release collections of tracks known as beat tapes.",
"Lo-fi and Gaming: The genre is popular in gaming communities, providing a relaxed backdrop to gameplay.",
"Niche Sub-genres: Sub-genres like lo-fi house and lo-fi techno have emerged, expanding the genre's boundaries.",
"Lo-fi and Film: The genre is increasingly used in film soundtracks, enhancing scenes with its emotive and atmospheric qualities.",
"Lo-fi as a Genre Blend: Artists often blend lo-fi elements with other genres, creating unique and experimental sounds.",
"Impact of Technology: Advancements in music production technology have made it easier for artists to create lo-fi music at home.",
"Lo-fi as a Mood: Beyond being a genre, lo-fi is often used to describe a specific mood or atmosphere in music.",
"Educational Content: Some lo-fi channels provide educational content, explaining the process of creating lo-fi music.",
"Lo-fi Playlists for Pets: There are lo-fi playlists specifically curated for pets, claiming to have a calming effect on animals.",
"Lo-fi Remix Culture: Artists often remix popular songs in a lo-fi style, creating a unique spin on familiar tunes.",
"Lo-fi and Fashion: The genre's aesthetic has influenced fashion trends, with merchandise featuring minimalist designs.",
"Lo-fi Festivals Worldwide: Events like the Lo-Fi Lounge in London showcase the global appeal of the genre.",
"Lo-fi and Mental Health: Many listeners turn to lo-fi music as a way to cope with stress and anxiety.",
"Simplicity in Composition: Lo-fi compositions often embrace simplicity, focusing on mood and emotion rather than complex arrangements.",
"Lo-fi and Nature Sounds: Nature sounds, such as ocean waves or wind, are frequently incorporated into lo-fi tracks.",
"Lo-fi in Virtual Reality: Virtual reality platforms have started featuring lo-fi experiences, allowing users to immerse themselves in calming environments.",
"Lo-fi Remix Challenges: Online challenges and competitions encourage producers to create lo-fi remixes of specific songs.",
"Lo-fi and Cultural References: Many lo-fi tracks include samples from old movies, radio broadcasts, and historical speeches.",
"Lo-fi Synthesizers: While often associated with sampled sounds, some lo-fi artists use synthesizers to create their signature sound.",
"Lo-fi and Nostalgia: The genre's nostalgic elements evoke a sense of longing for the past, contributing to its widespread appeal."];

        setFacts(fetchedFacts);
        setLoading(false);
        displayRandomFact();
      } catch (error) {
        console.error("Error fetching lofi music facts:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading < 100) {
        setLoading((prevLoading) => {
          const newLoading = prevLoading + Math.floor(Math.random() * 25);
          return newLoading <= 100 ? newLoading : 100;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div>
      <div>
        <h1 className="text-white text-4xl">Loading</h1>
        <div className="text-white">{loading}</div>
        <p className="text-white">{randomFact}</p>
        <button onClick={displayRandomFact} className="text-white">
          Get Another Fact
        </button>
      </div>
    </div>
  );
};

export default LoadProgress;
