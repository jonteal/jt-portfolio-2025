import { Link } from "react-router";
export const Games = () => {
  const games = [
    {
      id: 1,
      name: "Word Scramble",
      description:
        "A fun word scramble game where you guess the correct word from a scrambled version.",
      routePath: "/games/word-scramble",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white mt-24 text-5xl">Games</h1>
      <div>
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col justify-center items-center mt-10"
          >
            <Link
              to={game.routePath}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              <h2 className="text-white text-3xl">{game.name}</h2>
              <p className="text-white text-lg mt-2">{game.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
