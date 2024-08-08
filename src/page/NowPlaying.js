import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { fetchNowPlaying, fetchPopular } from "../services/movieAction";
import CardMovie from "../components/CardMovie";

export default function NowPlaying() {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  //useEffect need callback function and dependencies
  useEffect(() => {
    fetchNowPlaying().then((json) => {
      setMoviesNowPlaying(json.results);
      setLoading(false);
    });
  }, []);
  console.log(moviesNowPlaying);
  return (
      <div className=" mt-[88px]">
       <section className='mt-20 text-center text-black'>
            <h1>Ignore</h1>
         </section>
        <section className="flex justify-center bg-black h-20">
              <h1 className="text-2xl font-bold text-white text-center mt-6">Now Playing</h1>
          </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-6 gap-4 mb-5">
          {loading ? (
            <Loading />
          ) : (
            moviesNowPlaying.map((moviesNow, index) => (
              <CardMovie key={index} data={moviesNow} />
            ))
          )}
        </section>
      </div>
  );
}
