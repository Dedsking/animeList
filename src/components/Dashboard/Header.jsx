"use client";
import ButtonBack from "./ButtonBack";

const Header = (props) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <ButtonBack />

      <h3 className="text-2xl text-color-primary font-bold">{props.title}</h3>
    </div>
  );
};

export default Header;
