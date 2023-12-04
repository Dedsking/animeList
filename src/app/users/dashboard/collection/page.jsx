import AnimeCollection from "@/components/AnimeList/AnimeCollection";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import { Suspense } from "react";

const page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="mt-4 px-4">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {collection.map((collec, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collec.anime_mal_id}`}
              className="relative border-2 border-color-accent">
              <Suspense>
                <AnimeCollection anime_mal_id={collec.anime_mal_id} />
              </Suspense>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
