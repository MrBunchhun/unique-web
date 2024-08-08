import React from 'react'

export default function CardMovie({data}) {
  return (
            <div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-300 dark:text-white line-clamp-1">{data?.title}</h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-light text-gray-300 dark:text-white">{data?.release_date}</span>
                    </div>
                </div>
            </div>
  )
}
