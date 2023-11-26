"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = (props) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={handleBack} className="text-color-primary">
        <ArrowSquareLeft size={32} />
      </button>

      <h3 className="text-2xl text-color-primary font-bold">{props.title}</h3>
    </div>
  );
};

export default Header;
