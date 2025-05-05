import { useState, useEffect } from "react"
// import { getAllMovies, getAllGenres } from "../../lib/data"
import MovieCard from "../../components/moviecard"
import GenreFilter from "@/components/genresfilter"
import Link from "next/link"

export default function MoviesPage({ movies, genres, initialGenreId }) {
    const [filteredMovies, setFilteredMovies] = useState([])
    const [selectedGenreId, setSelectedGenreId] = useState(initialGenreId || null)

    useEffect(() => {
        setFilteredMovies(selectedGenreId ? movies.filter((movie) => movie.genre_id === selectedGenreId) : movies)
    }, [selectedGenreId, movies])

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <Link href={"/"}><button variant="ghost" className="mb-4 hover:text-gray-500 p-2">
                    ← Back to Home
                </button>
                </Link>
                <h1 className="text-3xl font-bold mb-6 p-2">All Movies</h1>

                <div className="mb-8 p-2">
                    <GenreFilter genres={genres} selectedGenreId={selectedGenreId} onGenreChange={setSelectedGenreId} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMovies.map((movie) => (
                        <Link href={`/movies/${movie.id}`} className='p-2 rounded hover:bg-gray-500'>
                            <MovieCard key={movie.id} movie={movie} showDirector={false} />
                        </Link>
                    ))}
                </div>

                {filteredMovies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-muted-foreground">No movies found for this genre.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export async function getStaticProps({ query }) {

    let movies = await fetch(`${process.env.API_URL}/movies`)
    let genres = await fetch(`${process.env.API_URL}/genres`)

    movies = await movies.json()
    genres = await genres.json()


    return {
        props: {
            movies,
            genres,
            initialGenreId: query?.genre || null,
        },
        revalidate: 3600,
    }
}