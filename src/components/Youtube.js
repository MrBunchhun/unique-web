// import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom'

// export default function Youtube() {
//     const {movieList, setMovieList} = useState([])
//      const getMovie = () => {
//         fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ee460ae64e61fb6cbd87aff10789215")
        
//         .then(res => res.json())
//         .then(json => console.log(json.results))
//     }
//     useEffect(() =>{
//         getMovie()
//     },[])
//     console.log(movieList);
    
//   return (
//     <div>
//         {
//             movieList.map((movie) => (
//                 <image />
//             ))
//         }
//     </div>
//   )
// }
