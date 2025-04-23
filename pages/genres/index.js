import Link from "next/link"
import { getAllGenres } from "../../lib/data"
import GenreCard from "@/components/genrecard"

export default function GenresPage({ genres }) {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Movie Genres</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {genres.map((genre) => (
                        <Link key={genre.id} href={`/genres/${genre.id}`}>
                            <GenreCard genre={genre} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const genres = await getAllGenres()
    return {
        props: {
            genres,
        },
    }
}
