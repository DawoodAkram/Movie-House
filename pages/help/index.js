import Link from "next/link"

const HelpPage = () => {

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Link href={"/"}>
                        <button variant="ghost" className="mb-4 hover:text-gray-500">
                            ← Back to Home
                        </button>
                    </Link>
                    <title>Help Center</title>
                    <div className="text-3xl font-bold mb-6">Help Center</div>
                    <p>At Movie House, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
                    <h3>Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
                    <h3>How We Use Your Information</h3>
                    <p>We use your information to provide, maintain, and improve our services, and to communicate with you about updates and new features.</p>
                    <div className="flex flex-wrap gap-4 mt-6 ">
                        <Link href={'/help/faqs'} className="hover:text-gray-500"> FAQs </Link>
                        <Link href={'/help/contact'} className="hover:text-gray-500"> Contact Us</Link>
                        <Link href={'/help/privacy'} className="hover:text-gray-500"> Privacy</Link>
                    </div>
                </div>
            </div>


            {/* <div className="flex flex-wrap gap-2 mb-6">
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
            </div> */}

        </>
    )
}

export default HelpPage