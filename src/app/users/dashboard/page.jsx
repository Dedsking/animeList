import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  // console.log(user);
  return (
    <div className="text-color-primary flex flex-col justify-center items-center mt-8 gap-4">
      <div className="font-bold text-2xl flex justify-center items-center gap-2">
        <h3>Dashboard</h3>
        <h5>Welcome, {user?.name}</h5>
      </div>
      <div className="w-1/6">
        <Image
          src={user?.image}
          alt="..."
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="flex flex-wrap py-8 gap-4">
        <Link
          href={"/users/dashboard/collection"}
          className={
            "bg-color-accent text-color-dark py-3 px-4 text-xl hover:bg-color-accent/50"
          }>
          My Collection
        </Link>
        <Link
          href={"/users/dashboard/comment"}
          className={
            "bg-color-accent text-color-dark py-3 px-4 text-xl hover:bg-color-accent/50"
          }>
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default page;
