import Head from "next/head"
import Link from "next/link"
import { getMovieById, getDirectorById, getMoviesByDirector, getAllMovies } from "../../../lib/data"
import MovieCard from "../../../components/moviecard"


export default function DirectorPage({ movie, director, directorMovies }) {
    console.log(directorMovies);

    if (!movie || !director) {
        return (
            <>
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-4">Not Found</h1>
                    <p className="mb-6">The director or movie you're looking for doesn't exist or has been removed.</p>
                    <Link href="/movies">
                        <button>Back to Movies</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/movies/${movie.id}`}>
                        ← Back to {movie.title}
                    </Link>

                    <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4">{director.name}</h1>
                            <div className="prose max-w-none">
                                <p className="text-lg mb-6">{director.biography}</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Movies by {director.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {directorMovies.map((movie) => (
                            <div className="hover:bg-gray-500 rounded">
                                <MovieCard key={movie.id} movie={movie} showDirector={false} />
                            </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const movies = await getAllMovies()

    return {
        paths: movies.map((movie) => ({
            params: { id: movie.id },
        })),
        fallback: true,
    }
}

export async function getStaticProps(context) {

    const movie = await getMovieById(context.params.id)
    if (!movie) {
        return {
            notFound: true,
        }
    }

    const director = await getDirectorById(movie.directorId)
    if (!director) {
        return {
            notFound: true,
        }
    }

    const directorMovies = await getMoviesByDirector(director.id)
    return {
        props: {
            movie,
            director,
            directorMovies,
        },
        revalidate: 3600,
    }
}
