import Head from "next/head"

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Page Not Found | Movie House</title>
                <meta name="description" content="The page you are looking for could not be found." />
            </Head>

            <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a href="/">
                    <button size="lg">Go Home</button>
                </a>
            </div>
        </>
    )
}
