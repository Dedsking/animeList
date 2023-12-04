"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent " />
        <div className="text-color-accent text-4xl font-bold">Not Found</div>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all underline hover:no-underline">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
