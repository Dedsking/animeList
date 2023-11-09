import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const ActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between items-center">
      {user ? (
        <Link
          href={"/users/dashboard"}
          className=" bg-color-secondary text-color-primary rounded hover:text-color-accent py-1 px-3 transition-all">
          Dashboard
        </Link>
      ) : null}

      <Link href={actionUrl} className="border py-1 px-3 hover:bg-color-secondary hover:text-color-primary transition-all rounded">
        {actionLabel}
      </Link>
    </div>
  );
};

export default ActionButton;
