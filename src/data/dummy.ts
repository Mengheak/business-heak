export interface IGameAccount {
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

export const gameAccountsData: IGameAccount[] = [
  {
    id: "1",
    title: "Mythic Glory MLBB Account",
    game: "MLBB",
    rank: "Mythic Glory",
    price: 150,
    description: "High-level MLBB account with over 80 heroes and rare skins.",
    images: [
      "https://placehold.co/600x400?text=MLBB+1",
      "https://placehold.co/600x400?text=MLBB+2",
    ],
    seller: "user_123",
    isSold: false,
  },
  {
    id: "2",
    title: "Legendary PES Team",
    game: "PES",
    rank: "Legendary",
    price: 100,
    description: "Top-tier PES account with iconic players and custom kits.",
    images: [
      "https://placehold.co/600x400?text=PES+1",
      "https://placehold.co/600x400?text=PES+2",
    ],
    seller: "user_456",
    isSold: true,
  },
  {
    id: "3",
    title: "Conqueror PUBG Mobile Account",
    game: "PUBG",
    rank: "Conqueror",
    price: 180,
    description:
      "Conqueror-tier PUBG account with elite outfits and high stats.",
    images: [
      "https://placehold.co/600x400?text=PUBG+1",
      "https://placehold.co/600x400?text=PUBG+2",
    ],
    seller: "user_789",
    isSold: false,
  },
  {
    id: "4",
    title: "Heroic Free Fire Account",
    game: "Free Fire",
    rank: "Heroic",
    price: 90,
    description: "Free Fire account with premium skins and exclusive rewards.",
    images: [
      "https://placehold.co/600x400?text=Free+Fire+1",
      "https://placehold.co/600x400?text=Free+Fire+2",
    ],
    seller: "user_321",
    isSold: false,
  },
];
