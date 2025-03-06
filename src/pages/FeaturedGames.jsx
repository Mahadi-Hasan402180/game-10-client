import React from "react";

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      title: "Ludu",
      image: "https://i.ibb.co.com/VW25TYkH/jonathan-petersson-a6-N685q-Ls-HQ-unsplash.jpg",
      rating: 4.8,
    },
    
    {
      id: 2,
      title: "markus-spiske",
      image: "https://i.ibb.co.com/8490y3k6/markus-spiske-Qozz-Jp-FZ2lg-unsplash.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Chess",
      image: "https://i.ibb.co.com/934FmZrh/jeshoots-com-fz-OITu-S1-DIQ-unsplash.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Card 29",
      image: "https://i.ibb.co.com/yc59FnV4/thomas-buchholz-0n7-ei-AQZw-A-unsplash.jpg",
      rating: 4.6,
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-4xl text-center font-bold">🔥 Featured Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white transition-transform transform hover:scale-105"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-3">{game.title}</h3>
            <p className="text-yellow-400">⭐ {game.rating}/5</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
