import React from "react";
import { SiGamejolt } from "react-icons/si";
interface TitlesProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const Titles: React.FC<TitlesProps> = ({
  text,
  size = "md",
  align = "left",
}) => {
  return (
    <h2 className={`font-bold flex items-center gap-1 text-red-800 ${sizeMap[size]} text-${align}`}>
      <SiGamejolt />
      {text}
    </h2>
  );
};

export default Titles;
