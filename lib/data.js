import moviesData from "../public/data 7.25.58 PM.json 19-37-31-472.json"

export async function getAllMovies() {
    return moviesData.movies
}

export async function getAllDirectors() {
    return moviesData.directors
}

export async function getAllGenres() {
    return moviesData.genres
}

export async function getMovieById(id) {
    const movies = await getAllMovies()
    return movies.find(movie => movie.id === id)
}

export async function getTrendingMovies() {
    const movies = await getAllMovies()
    return movies.sort((a, b) => b.rating - a.rating).slice(0, 4)
}

export async function getDirectorById(dID) {
    const directors = await getAllDirectors()
    return directors.find(director => director.id === dID)
}

export async function getMoviesByDirector(dID) {
    const movies = await getAllMovies()
    return movies.filter(movie => movie.directorId === dID)
}


export async function getGenreById(gId) {
    const genres = await getAllGenres()
    return genres.find(genre => genre.id === gId)
}

