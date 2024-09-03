import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

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
              <Image
                src={collec.anime_image}
                alt={"..."}
                width={300}
                height={300}
                priority={true}
                className="w-full"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
                <h5 className="text-xl text-center">{collec.anime_title}</h5>
              </div>

              {/* <AnimeCollection anime_mal_id={collec.anime_mal_id} /> */}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
