import React from "react";

const LeftArrow = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="59.5"
        y="59.5"
        width="59"
        height="59"
        rx="29.5"
        transform="rotate(180 59.5 59.5)"
        stroke="#131313"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6852 28.6372L32.9991 17.7946L35.8271 20.5048L25.9271 29.9923L35.8271 39.4798L32.9991 42.1899L21.6852 31.3474C21.3102 30.9879 21.0996 30.5005 21.0996 29.9923C21.0996 29.484 21.3102 28.9966 21.6852 28.6372Z"
        fill="#131313"
      />
    </svg>
  );
};

export default LeftArrow;
