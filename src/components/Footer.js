import React from "react";

export default function Footer() {
  return (
    <section>
      <footer className="p-4   dark:bg-gray-800">
      <div className="max-w-screen-2xl text-center">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li className="">
              <span className="text-sm text-white sm:text-center">
                © 2024-2030{" "}
                <a href="#" className="hover:underline">
                  Bunchhun
                </a>
                . All Rights Reserved.
              </span>
            </li>
            </ul>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
            <li className="">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li className="">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Popular
              </a>
            </li>
            <li className="">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Now Playing
              </a>
            </li>
            <li className="">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Upcoming
              </a>
            </li>
          </ul>
        </div>
    </footer>
    </section>
  );
}
