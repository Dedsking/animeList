"use client";

import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState();
  const handleButton = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email };
    const response = await fetch(`/api/v1/collection`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary text-lg">
          Data telah ditambahkan ke Koleksi
        </p>
      ) : (
        <button
          onClick={handleButton}
          className="py-1 px-3 bg-color-accent hover:bg-color-accent/50 rounded-md shadow-color-primary shadow-md">
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
