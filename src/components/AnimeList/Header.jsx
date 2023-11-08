import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center text-color-primary p-4">
      <h1 className="text-2xl font-bold">{title}</h1>

      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-xs underline hover:text-color-accent text-color-primary transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
