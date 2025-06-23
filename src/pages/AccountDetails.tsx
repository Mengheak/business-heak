import React, { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

interface Account {
  id: string;
  title: string;
  game: "MLBB" | "PES" | "PUBG" | "Free Fire";
  rank: string;
  price: number;
  description: string;
  images: string[];
  seller: string;
  isSold: boolean;
}

const AccountDetails: React.FC = () => {
  const navigate = useNavigate();
  const { thisAccount } = useLocation().state as { thisAccount: Account };
  const [current, setCurrent] = useState<number>(0);
  const total = thisAccount.images.length;
  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  console.log(thisAccount);
  return (
    <section className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
      <span>
        <FaAngleDoubleLeft
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer hover:text-blue-600 transition"
        />
      </span>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Image Carousel */}
        <div className="relative w-full h-64 bg-gray-100 rounded flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory">
          <img
            src={thisAccount.images[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50  hover:bg-white p-2 rounded-full shadow"
          >
            <FaAngleRight />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {thisAccount.images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-1 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{thisAccount.title}</h1>
          <p className="text-gray-600">
            <span className="font-medium">Game:</span> {thisAccount.game}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Rank:</span> {thisAccount.rank}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Seller:</span> {thisAccount.seller}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {thisAccount.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">
              ${thisAccount.price}
            </span>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                thisAccount.isSold
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {thisAccount.isSold ? "Sold" : "Available"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
