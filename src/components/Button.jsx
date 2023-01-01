import React from "react";

const Button = ({ color,icon,bgColor, text, borderRadius, size,onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text || icon}
    </button>
  );
};

export default Button;
