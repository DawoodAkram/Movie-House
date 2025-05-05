import MovieCard from '@/components/moviecard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const GenreMovies = ({ movies, genre }) => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <Link href={`/genres`} className="text-3xl font-bold mb-6">← {genre.name} Movies</Link>
                <br />
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <Link key={movie.id} href={`/movies/${movie.id}`} className='p-2 rounded hover:bg-gray-500'>
                            <MovieCard key={movie.id} movie={movie} showDirector={false} />
                        </Link>
                    ))}
                </div>

                {movies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-muted-foreground">No movies found for this genre.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default GenreMovies

export async function getStaticPaths() {

    const paths = [
        { params: { id: 'g1' } },
        { params: { id: 'g3' } },
        { params: { id: "g4" } },
        { params: { id: "g5" } }
    ]
    return {
        paths,
        fallback: "blocking"
    }
}


export async function getStaticProps(context) {
    const genreId = context.params.id
    // const movies = await getAllMovies()

    const moviesRes = await fetch(`${process.env.API_URL}/genres/${genreId}/movies`)
    const genreRes = await fetch(`${process.env.API_URL}/genres/${genreId}`)
    if (!moviesRes.ok || !genreRes.ok) {
        return { notFound: true };
    }

    const movies = await moviesRes.json()
    const genre = await genreRes.json()

    // console.log(genre.name);
    // console.log(movies);
    // movies.map((m) => console.log(m));
    // console.log(typeof (movies));

    if (!movies) {
        return {
            notFound: true
        }
    }


    return {
        props: {
            movies,
            genre
        },
        revalidate: 3600,
    }
}

