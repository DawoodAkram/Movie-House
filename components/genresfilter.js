
export default function GenreFilter({ genres, selectedGenreId, onGenreChange }) {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            <button className="hover:text-gray-500" variant={!selectedGenreId ? "default" : "outline"} onClick={() => onGenreChange(null)} size="sm">
                All Genres
            </button>

            {genres.map((genre) => (
                <button
                    key={genre.id}
                    variant={selectedGenreId === genre.id ? "default" : "outline"}
                    onClick={() => onGenreChange(genre.id)}
                    size="sm"
                    className="hover:text-gray-500"
                >
                    {genre.name}
                </button>
            ))}
        </div>
    )
}
