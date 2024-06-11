"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/Options";
import { useStore } from "@/store";

export type linksType = {
  title: string;
  path: string;
}[];
const links: linksType = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Food",
    path: "/food",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Orders",
    path: "/order",
  },
  
];

const Navbar = () => {
  const { data: session } = useSession();
  const {state} = useStore();
  const pathName = usePathname();

  return (
    <div className="h-[100px] max-w-[1500px] m-auto pl-[50px] pr-[50px] bg-blue flex justify-between items-center ">
      <div className="flex items-center justify-center">
        <img src="/logo.png" alt="" style={{width:25,height:25}}/>
        <Link href="/" className=" ml-4 text-xl font-bold text-textSoft">
          CleanPlate
        </Link>
      </div>
      {/* Links */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-2.5">
            {/* Login/Logout Logic */}

            {links.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`min-w-100px px-5 py-1 rounded-full font-semibold text-center text-white ${
                  pathName === item.path ? "text-green-700" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}

        {session?.user && (
             
              <Link
                href="/add-item"
                className="text-white px-5 py-1 cursor-pointer font-bold text-center "
              >
                Add Item
              </Link>
            )}
            {/* Admin Logic */}

            {session?.user ? (
              <>
                <button onClick={async()=> await signOut()} className=" text-white px-5 py-1 cursor-pointer font-bold  text-center ">
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="text-white px-5 py-1 cursor-pointer font-bold text-center "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-3 ">
        {/* *********SearchField*********** */}

        <div className="form-control flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-9 md:w-auto "
          />
        </div>

        {/* *********ICON*********** */}

        {/* <div>
          <button className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div> */}

        {/* Cart Icon */}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link href={'/cart'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-white bg-textSoft">
              {state.count}
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
