import React from "react";
import Titles from "../components/Titles";
import Carousels from "../components/Carousel";
import { gameAccountsData } from "../data/dummy";
import GameCard from "../components/Cards/GameCard";

const Main: React.FC = () => {
  return (
    <div className="flex-1">
      <Carousels />
      <section className="pt-16">
        <Titles text="Recent Posts" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-3">
          {gameAccountsData.map((game, _) => {
            return (
              <GameCard
                id={game.id}
                description={game.description}
                game={game.game}
                images={game?.images}
                isSold={game.isSold}
                price={game.price}
                rank={game.rank}
                title={game.title}
                key={game.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
