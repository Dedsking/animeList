import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`);
  const videoAnime = await getAnimeResponse(`anime/${id}/videos`);
  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-color-primary text-2xl">
          {animeDetail.data.title} - {animeDetail.data.year}
        </h3>
      </div>
      <div className="px-4 pt-4 flex gap-2 text-color-primary/50 overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary/50 p-2">
          <h3>PEERINGKAT</h3>
          <p>{animeDetail.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary/50 p-2">
          <h3>SKOR</h3>
          <p>{animeDetail.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary/50 p-2">
          <h3>ANGGOTA</h3>
          <p>{animeDetail.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary/50 p-2">
          <h3>EPISODE</h3>
          <p>{animeDetail.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-4 text-color-primary/50 md:flex-nowrap flex-wrap">
        <Image
          src={animeDetail.data.images.webp.image_url}
          alt={animeDetail.data.images.jpg.image_url}
          width={300}
          height={300}
          className="w-full rounded object-cover max-w-xs"
          priority
        />
        <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
      </div>
      <div className="border border-b text-color-secondary mt-4"></div>
      <div className="relative overflow-x-auto mt-10 mb-20 flex justify-center p-4">
        <table className="table-fixed text-color-primary/50 md:min-w-[600px]">
          <thead>
            <tr className="border">
              <th className="px-2 md:px-6 py-4 text-start uppercase">
                Episode
              </th>
              <th className="px-2 md:px-6 py-4 text-start uppercase">Title</th>
            </tr>
          </thead>
          <tbody>
            {videoAnime.data.episodes.map((data, i) => {
              return (
                <tr className="border-b" key={i}>
                  <td className="px-2 md:px-6 py-4">{data.episode}</td>
                  <td>
                    <div className="px-2 md:px-6 py-4 max-w-lg">
                      <a
                        href={data.url}
                        target="_blank"
                        className=" hover:text-color-accent">
                        {data.title}
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
