import MovieCard from '@/components/moviecard'
import { getMovieById } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const MovieDetail = (props) => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/movies`}>← Back to Movies</Link>
                    <br />
                    <br />

                    <div className='flex justify-center align-middle'>
                        <Link href={`/movies/${props.movie.id}`} className='p-2 rounded hover:bg-gray-500'>
                            <MovieCard key={props.movie.id} movie={props.movie} showDirector={true} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail


export async function getStaticPaths() {
    const paths = [
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } },
        { params: { id: "4" } },
        { params: { id: "5" } }
    ]

    return {
        paths: paths,
        fallback: "blocking"
    }
}


export async function getStaticProps(context) {
    const id = context.params.id
    const movie = await getMovieById(id)
    if (!movie) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            movie: movie
        }
    }

}