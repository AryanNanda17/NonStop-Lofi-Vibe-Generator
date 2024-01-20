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
        const fetchedFacts = ["Fact 1", "Fact 2", "Fact 3", "Fact 4"];

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
