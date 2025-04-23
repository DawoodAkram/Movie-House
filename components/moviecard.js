import Link from "next/link"

const MovieCard = ({ movie, showDirector }) => {

    return (
        <section className='relative border border-gray-500 p-6 rounded hover:text-black'>
            <div className="absolute top-2 left-2 text-sm text-gray-600">{movie.id}</div>
            <div>Title: {movie.title}</div>
            <div>Description: {movie.description}</div>
            <div>Rating: {movie.rating}/10</div>
            <br />
            {showDirector &&
                <Link className=" hover:text-white" href={`/movies/${movie.id}/director`}>See More About Director</Link>
            }
        </section>
    )
}

export default MovieCard
