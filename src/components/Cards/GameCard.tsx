import React from "react";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  id?: string;
  title: string;
  game: string;
  rank: string;
  price: number;
  description: string;
  images: string[];
  isSold: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  game,
  rank,
  price,
  description,
  images,
  isSold,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="border rounded shadow bg-white overflow-hidden"
      onClick={() =>
        navigate(`/account-details/${id}`, {
          state: {
            thisAccount: {
              id,
              title,
              game,
              rank,
              price,
              description,
              images,
              isSold,
            },
          },
        })
      }
    >
      <img src={images?.[0]} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">
          {game} • {rank}
        </p>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-blue-600">${price}</span>
          <span
            className={`text-xs px-2 py-1 rounded ${
              isSold ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {isSold ? "Sold" : "Available"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
