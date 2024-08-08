const BASE_URL = "https://api.themoviedb.org/3/movie";

// fetch Popular movies
export async function fetchPopular() {
    const response = await fetch(`${BASE_URL}/popular?api_key=1ee460ae64e61fb6cbd87aff10789215`)
    return response.json()
}

// fetch Now playing movie
export async function fetchNowPlaying() {
    const response = await fetch(`${BASE_URL}/now_playing?api_key=1ee460ae64e61fb6cbd87aff10789215`)
    return response.json()
}

//fetch Upcoming movie
export async function fetchUpcoming() {
    const response = await fetch(`${BASE_URL}/upcoming?api_key=1ee460ae64e61fb6cbd87aff10789215`)
    return response.json()
}