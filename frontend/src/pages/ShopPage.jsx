// pages/Shop.jsx
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

const ACCOUNTS = [
  { id: 1, name: "Legend Rank Account", rank: "Legend", price: 50, heroes: 35, skins: 20, image: "/images/mlbb1.png", progress: 80 },
  { id: 2, name: "Epic Starter Account", rank: "Epic", price: 25, heroes: 20, skins: 10, image: "/images/mlbb2.png", progress: 60 },
  { id: 3, name: "Mythic Master Account", rank: "Mythic", price: 100, heroes: 50, skins: 40, image: "/images/mlbb3.png", progress: 95 },
];

const RANKS = ["All", "Epic", "Legend", "Mythic"];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [rankFilter, setRankFilter] = useState("All");

  const filteredAccounts = ACCOUNTS.filter(account =>
    (rankFilter === "All" || account.rank === rankFilter) &&
    account.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-[Orbitron]">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 text-center py-6 drop-shadow-[0_0_25px_rgba(255,51,204,0.8)]">
        🎮 MLBB Accounts Shop
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 mb-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search accounts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/50 border border-cyan-400 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none text-white text-sm"
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
        </div>

        <div className="flex gap-1 flex-wrap">
          {RANKS.map(rank => (
            <button
              key={rank}
              onClick={() => setRankFilter(rank)}
              className={`px-2 py-1 rounded-lg text-xs font-bold uppercase transition ${
                rankFilter === rank
                  ? "bg-pink-500 text-white shadow-[0_0_10px_rgba(255,51,204,0.7)]"
                  : "bg-black/50 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              }`}
            >
              {rank}
            </button>
          ))}
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="flex-1 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-full">
          {filteredAccounts.length === 0 && (
            <p className="col-span-full text-center text-gray-400 text-sm">No accounts found 😢</p>
          )}

          {filteredAccounts.map(account => (
            <div
              key={account.id}
              className="bg-black/70 border border-cyan-400 rounded-xl p-3 flex flex-col hover:scale-105 transition shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(255,51,204,0.5)] text-sm"
            >
              <div className="h-28 bg-black/30 rounded-lg overflow-hidden flex items-center justify-center mb-2">
                <img src={account.image} alt={account.name} className="h-full object-contain" />
              </div>

              <div className="flex justify-between items-center mb-1">
                <h2 className="text-sm font-bold text-pink-500">{account.name}</h2>
                <span className={`px-1 py-0.5 text-[10px] rounded-full font-bold ${
                  account.rank === "Epic" ? "bg-blue-500" :
                  account.rank === "Legend" ? "bg-yellow-400" :
                  "bg-red-500"
                } text-black`}>
                  {account.rank}
                </span>
              </div>

              <p className="text-gray-400 mb-1 text-xs">Heroes: {account.heroes} | Skins: {account.skins}</p>

              <div className="w-full bg-black/30 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full bg-pink-500 transition-all"
                  style={{ width: `${account.progress}%` }}
                />
              </div>

              <p className="text-white font-bold text-lg mb-2">${account.price}</p>
              <div className="flex gap-1 mt-auto">
                <button className="flex-1 py-1.5 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-lg transition text-xs flex items-center justify-center">
                  <FaShoppingCart className="mr-1 text-xs" /> Buy
                </button>
                <button className="w-8 h-8 bg-black/50 border border-pink-500 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-black transition text-sm">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
