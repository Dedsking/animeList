import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="mt-4 px-4">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
            <h5 className="text-xl text-center">Nama anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
            <h5 className="text-xl text-center">Nama anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
            <h5 className="text-xl text-center">Nama anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16 ">
            <h5 className="text-xl text-center">Nama anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
