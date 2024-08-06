"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";

export function Footer() {
  return (
    <footer className="my-12">
      <ul className="flex flex-wrap justify-center uppercase">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-[#131313] transition-all ease-in-out duration-200"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </ul>

      <p className="mt-2 text-center  text-muted-foreground cursor-default">
        &copy; 2024 HK. All Rights reserved.
      </p>
    </footer>
  );
}
