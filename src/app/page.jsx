import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");

  //map dari raw data
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  //slice dari data recomended
  recomendedAnime = reproduce(recomendedAnime, 6);

  return (
    <>
      <section>
        <Header
          title="Anime Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
};

export default Page;
