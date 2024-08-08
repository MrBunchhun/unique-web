import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

// function get all products
export const fetchPopularMovie = createAsyncThunk('/movies/fetchPopularMovie',async() => {
    try{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ee460ae64e61fb6cbd87aff10789215&language=en-US&page=1")
        const data = await response.json()
        const movieTitle = data.results[0].title
        const movieOverView = data.results[0].overview   
        console.log('movie title', movieTitle);
        console.log('Over View', movieOverView);
        return data
    }catch(error){
        return Promise.reject(error)
    }
})
