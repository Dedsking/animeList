import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id}>
            <Link
              href={`/anime/${anime.mal_id}`}
              className=" bg-indigo-500 cursor-pointer text-color-primary hover:text-color-accent transition-all">
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
                alt="contoh..."
                priority
              />
              <h3 className="font-bold md:text-xl text-md p-4">
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
