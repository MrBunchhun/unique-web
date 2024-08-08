import React from "react";
import logo_unqiue from "./../assets/unqiue-movie.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="container mx-auto dark:bg-gray-900 dark:border-orange-600 fixed z-20 top-0 bg-orange-600">
      <div className="flex flex-wrap items-center justify-between p-4">
      <ul className=" self-center text-[15px] flex flex-col font-medium p-4 md:p-0 mt-4 borde md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo_unqiue} className="h-14" alt="" />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white dark:text-white">
            Unique Movie
          </span>
        </a>
        </li>
        </ul>
        <div className="hidden md:block md:w-auto mr-[100px]" id="navbar-dropdown">
          <ul className=" self-center text-[15px] flex flex-col font-medium p-4 md:p-0 mt-4 borde md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            </li>
            <li>
              <Link
                to={"/"}
                className="gap-2 block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-blue-500 dark:bg-gray-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/popular"}
                className="gap-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                to={"/nowplaying"}
                className="gap-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Now Playing
              </Link>
            </li>
            <li>
              <Link
                to={"/upcoming"}
                className="gap-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Upcoming
              </Link>
            </li>
          </ul>    
        </div>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only ml-auto">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
