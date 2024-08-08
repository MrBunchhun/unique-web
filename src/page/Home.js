import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { fetchPopular } from "../services/movieAction";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    fetchPopular().then((json) => {
      setMoviesList(json.results);
    });
  }, []);
  console.log(moviesList);
  return (
    <div>
      {/* Background Image */}
      <section
        className={` h-[400px] w-full bg-cover bg-center p-[70px]`}
      >
        <h1 className="text-4xl font-extrabold text-white text-center mt-20">
          Welcome to my Website pages.
        </h1>
        <p className="text-2xl font-bold text-gray-500 text-center mt-2">
          Unique site is a website give you to watching the popular movie.
        </p>
      </section>
      {/* Title Popular category */}
      <section className="flex justify-center bg-orange-600 h-20">
        <h1 className="text-2xl font-bold text-black text-center mt-4">
          Popular Movie
        </h1>
      </section>
      {/* Popular movie list */}
      <section className="flex mt-10 mb-10 gap-2">
        {moviesList.slice(0, 5).map((movies, index) => (
          <CardMovie key={index} data={movies} />
        ))}
      </section>
      <section className="justify-center bg-black h-40">
        <h1 className="text-2xl font-bold text-white text-center mt-4">
          Unique Movies watches the movie action to relax X Unlimited movies.
          Enjoy your times.
        </h1>
      </section>
      <section className="flex justify-center bg-orange-600 h-20">
        <h1 className="text-2xl font-bold text-black text-center mt-4">
          Trending Movie
        </h1>
      </section>
      <section className="flex mt-10 mb-10 gap-2">
        {moviesList.slice(0, 5).map((movies, index) => (
          <CardMovie key={index} data={movies} />
        ))}
      </section>
    </div>
  );
}
