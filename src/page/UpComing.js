import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CardMovie from "../components/CardMovie";
import { fetchUpcoming } from "../services/movieAction";

export default function NowPlaying() {
  const [upcomingMovie, setUpComingMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  //useEffect need callback function and dependencies
  useEffect(() => {
    fetchUpcoming().then((json) => {
      setUpComingMovie(json.results);
      setLoading(false);
    });
  }, []);
  console.log(upcomingMovie);
  return (
      <div className=" mt-[88px]">
         <section className='mt-20 text-center text-black'>
            <h1>Ignore</h1>
         </section>
        <section className="flex justify-center bg-black h-20">
              <h1 className="text-2xl font-bold text-white text-center mt-6">Upcoming Movie</h1>
          </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-6 gap-4  mb-5">
          {loading ? (
            <Loading />
          ) : (
            upcomingMovie.map((upcoming, index) => (
              <CardMovie key={index} data={upcoming} />
            ))
          )}
        </section>
      </div>
  );
}
