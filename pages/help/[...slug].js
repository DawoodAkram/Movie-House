import ContactUs from "@/components/contactus"
import Faqs from "@/components/faqs"
import Privacy from "@/components/privacy"
import Link from "next/link"
import { useRouter } from "next/router"

export default function HelpPage({ page }) {
    const router = useRouter()

    console.log(page);

    if (router.isFallback) {
        return (
            <>
                <div className="container mx-auto px-4 py-8 text-center">
                    <p>Loading...</p>
                </div>
            </>
        )
    }

    if (!page) {
        return (
            <>
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                    <p className="mb-6">The help page you're looking for doesn't exist.</p>
                    <Link href="/help">
                        <button>Back to Help Center</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Link href={"/help"}>
                        <button variant="ghost" className="mb-4 hover:text-gray-500">
                            ← Back to Help Center
                        </button>
                    </Link>

                    {page[0] === 'contact' && <ContactUs />}

                    {page[0] === 'faqs' && <Faqs />}

                    {page[0] === 'privacy' && <Privacy />}

                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: ["faqs"] } },
            { params: { slug: ["contact"] } },
            { params: { slug: ["privacy"] } },
        ],
        fallback: "blocking",
    }
}

export async function getStaticProps(context) {
    const page = context.params.slug

    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page,
        },
    }
}
