"use client";

import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";

const AnimeCollection = async ({ anime_mal_id }) => {
  const animeDetail = await getAnimeResponse(`anime/${anime_mal_id}`);

  return (
    <>
      <Image
        src={animeDetail?.data?.images.webp.image_url}
        alt={animeDetail?.data?.images.jpg.image_url}
        width={300}
        height={300}
        priority={true}
        className="w-full"
      />
      <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
        <h5 className="text-xl text-center">{animeDetail?.data?.title}</h5>
      </div>
    </>
  );
};

export default AnimeCollection;
