import "../styles/globals.css"
import Heading from "components/Heading"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Heading />

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
