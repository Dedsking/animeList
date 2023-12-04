"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <button onClick={handleBack} className="text-color-primary">
      <ArrowSquareLeft size={32} />
    </button>
  );
};

export default ButtonBack;
