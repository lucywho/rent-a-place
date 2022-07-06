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
                <script src="https://js.stripe.com/v3/"></script>
            </Head>

            <header className="max-w-full">
                {router.asPath === "/" && (
                    <h1>Welcome to High Hallgarth Cottage</h1>
                )}
                {router.asPath === "/calendar" && (
                    <h1>Check availability and prices</h1>
                )}

                {router.asPath === "/success" && (
                    <h1>Thank you for choosing High Hallgarth</h1>
                )}
            </header>
        </div>
    )
}
