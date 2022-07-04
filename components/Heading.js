import Head from "next/head"
import Image from "next/image"

export default function Heading() {
    return (
        <div>
            <Head>
                <title>Rent-A-Place</title>
                <meta name="description" content="Rental Apartment Website" />
                <link rel="icon" href="/house.ico" />
            </Head>
            <header>
                <h1>Welcome to High Hallgarth Cottage</h1>
            </header>
        </div>
    )
}
