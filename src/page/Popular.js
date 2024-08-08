import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { fetchNowPlaying, fetchPopular } from "../services/movieAction";
import CardMovie from "../components/CardMovie";

export default function NowPlaying() {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  //useEffect need callback function and dependencies
  useEffect(() => {
    fetchPopular().then((json) => {
      setMoviesList(json.results);
      setLoading(false);
    });
  }, []);
  console.log(moviesList);
  return (
      <div className=" mt-[88px]">
         <section className='mt-20 text-center text-black'>
            <h1>Ignore</h1>
         </section>
        <section className="flex justify-center bg-black h-20">
              <h1 className="text-2xl font-bold text-white text-center mt-6">Popular Movie</h1>
          </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-6 gap-4  mb-5">
          {loading ? (
            <Loading />
          ) : (
            moviesList.map((movie, index) => (
              <CardMovie key={index} data={movie} />
            ))
          )}
        </section>
      </div>
  );
}
