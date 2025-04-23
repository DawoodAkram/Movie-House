import MovieCard from '@/components/moviecard'
import { getTrendingMovies } from '@/lib/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Home = (props) => {
  const router = useRouter()
  const handleGenres = () => {
    router.push('/genres')
  }

  const handleMovies = () => router.push('/movies')

  const handleHelp = (event) => router.push(`/${event.target.value}`)

  const handleDirectors = () => router.push('/directors')

  return (
    <>
      <section className='flex justify-center'>
        <button className="border border-gray-500 mt-2 p-2 rounded hover:bg-gray-500" onClick={handleGenres}>Browse Genres</button>
        <button className="border border-gray-500 mt-2 mx-2 p-2 rounded hover:bg-gray-500" onClick={handleMovies}>Movies</button>
        <button className="border border-gray-500 mt-2 p-2 rounded hover:bg-gray-500" onClick={handleDirectors}>Directors</button>
        <Link className="border border-gray-500 mx-2 mt-2 p-2 rounded hover:bg-gray-500" href={'/help'}>Help</Link>
        {/* <select id="info-select" onChange={handleHelp}>
          <option value="">--Choose an option--</option>
          <option value="help">Help</option>
          <option value="help/faqs">FAQs</option>
          <option value="help/contact">Contact</option>
          <option value="help/privacy">Privacy</option>
        </select> */}
      </section >
      <br />
      <div className="container mx-auto px-4 py-8">
        <h1 className="p-2 text-3xl font-bold mb-6">Trending Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {props.trendingMovies.map((movie) =>
            <Link href={`/movies/${movie.id}`} className='p-2 rounded hover:bg-gray-500'>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Home


export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies()

  return {
    props: {
      trendingMovies: trendingMovies
    },
    revalidate: 3600
  }
}