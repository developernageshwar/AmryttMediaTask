import React from "react";

const Footer = () => {
  return (
    <div className="flex  justify-center items-center text-red-500 font-bold p-3">
      <span>
        @ Amrytt media{" "}
        <span className="text-white">&#169;{new Date().getFullYear()}</span>
      </span>
    </div>
  );
};

export default Footer;
