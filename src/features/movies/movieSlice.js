import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovie } from "./createAction";

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
        error: null

    },
    extraReducers(builder) {
        builder.addCase(fetchPopularMovie.pending, (state) => {
            state.status = 'loading'
        }).addCase(fetchPopularMovie.fulfilled, (state, action) => {
            state.status = 'Fulfilled'
            state.movies = action.payload
            console.log('Action', action.payload);
        }).addCase(fetchPopularMovie.rejected, (state) => {
            state.status ='Rejected'
        }) 
    }
})

export default movieSlice.reducer