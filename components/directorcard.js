import { getMoviesByDirector } from "@/lib/data"
import Link from "next/link"
import { useEffect, useState } from "react"

const DirectorCard = ({ director, showDirector }) => {

    const [movies, setMovies] = useState()
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await getMoviesByDirector(director.id)
            setMovies(res)
        }
        fetchMovies()
    }, [])

    return (
        <section className="relative border border-gray-500 p-6 rounded hover:text-black h-64 flex flex-col justify-between">
            <div>
                <div className="absolute top-2 left-2 text-sm text-gray-600">{director.id}</div>
                <div className="text-lg font-semibold">{director.name}</div>
                <div className="text-sm text-gray-300 mt-2">{director.biography}</div>
            </div>

            <br />
            {movies && movies.map(movie =>
                <div> - {movie.title} </div>
            )}
        </section>
    )
}

export default DirectorCard
