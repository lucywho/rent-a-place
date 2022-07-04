import Head from "next/head"
import { useRouter } from "next/router"

export default function Heading() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Rent-A-Place</title>
                <meta name="description" content="Rental Apartment Website" />
                <link rel="icon" href="/house.ico" />
            </Head>

            <header className="max-w-full">
                {router.asPath === "/" && (
                    <h1>Welcome to High Hallgarth Cottage</h1>
                )}
                {router.asPath === "/calendar" && (
                    <h1>Check availability and prices</h1>
                )}
            </header>
        </div>
    )
}
