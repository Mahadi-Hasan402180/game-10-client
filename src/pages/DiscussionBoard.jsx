import React, { useState } from "react";

const DiscussionBoard = () => {
  const [threads, setThreads] = useState([
    { id: 1, title: "Best RPG Games of 2025?", upvotes: 30 },
    { id: 2, title: "Most anticipated games this year?", upvotes: 22 },
    { id: 3, title: "Top open-world games with great storytelling?", upvotes: 27 },
    { id: 4, title: "Which FPS game has the best multiplayer?", upvotes: 18 },
    { id: 5, title: "Retro games that still feel amazing to play?", upvotes: 25 },
  ]);

  return (
    <section className="my-12">
      <h2 className="text-4xl text-center font-bold">💬 Gamer Discussions</h2>
      <div className="max-w-2xl mx-auto mt-6">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="p-4 border rounded-lg shadow-lg bg-gray-900 text-white flex justify-between items-center mb-3 transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{thread.title}</h3>
            <button className="text-yellow-400 hover:text-yellow-300 transition">
              👍 {thread.upvotes}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscussionBoard;
