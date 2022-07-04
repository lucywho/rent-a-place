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
                <Image
                    src="/house.ico"
                    alt="image of house"
                    width={75}
                    height={50}
                />
                <h1>Welcome!</h1>
            </header>
        </div>
    )
}
