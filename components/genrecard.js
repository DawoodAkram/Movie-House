
const GenreCard = ({ genre }) => {
    return (
        <section className='relative border border-gray-500 p-6 rounded hover:bg-gray-500'>
            <div className="absolute top-2 left-2 text-sm text-gray-600">{genre.id}</div>
            <br />
            <div>{genre.name}</div>
        </section>
    )
}

export default GenreCard