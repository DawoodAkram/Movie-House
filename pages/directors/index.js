import DirectorCard from "@/components/directorcard"
import { getAllDirectors } from "@/lib/data"
import Link from "next/link"
import useSWR from "swr"

const fetcher = async () => await getAllDirectors()


export default function DirectorsPage() {
    const { data: directors, error, isLoading } = useSWR('directors', fetcher)

    console.log(directors);

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Error</h1>
                <p>Failed to load directors. Please try again later.</p>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <Link href={"/"}><button variant="ghost" className="mb-4 hover:text-gray-500">
                    ← Back to Home
                </button>
                </Link>
                <h1 className="text-3xl font-bold mb-8 p-2">Directors</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {directors.map((director) => (
                        <DirectorCard key={director.id} director={director} showDirector={true} />
                    ))}
                </div>
            </div>
        </>)
}
