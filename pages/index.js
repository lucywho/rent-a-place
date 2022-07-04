import Image from "next/image"
import Link from "next/link"

export default function Home() {
    const reviews = [
        {
            text: `A real getaway. Located well away from the tourist traps in a wonderfully quiet, peaceful location. Highly recommended!`,
            author: "Nora",
            date: "Nov 2021",
        },
        {
            text: `Highly recommended for the adventurous traveller. The earth toilet is not for the faint-hearted - but actually works very well. The cottage is charming and cosy and in an excellent location for walking.`,
            author: "Peter Clegg",
            date: "Oct 2021",
        },
        {
            text: `Absolutely wonderful in the summer! The cottage is a cool retreat and the barbecue area in the garden is great. It is very remote, so make sure you bring plenty of provisions as there are no shops in walking distance`,
            author: "Thelma and Barry",
            date: "Aug 2021",
        },
    ]

    const destinations = [
        {
            name: "Ambleside",
            description: "6 miles, 22 min by car",
        },
        {
            name: "Langdale Hotel & Spa",
            description: "5 miles, 20 min by car",
        },
        {
            name: "Old Man of Coniston",
            description: "10 miles, 4 hours by foot",
        },
        {
            name: "Windermere",
            description: "9.5 miles, 30 min by car",
        },
        {
            name: `Ravenglass and the La'al Ratty narrow-gauge railway`,
            description: "27 miles, 1h by car",
        },
        {
            name: "Langdale Pikes",
            description: "4 miles, 1hr 30 min by foot",
        },
        {
            name: "Kendal",
            description: "18 miles, 48 min by car",
        },
        {
            name: "Rydal Mount and Gardens",
            description: "6 miles, 2h 20min on foot, 25 mins by car",
        },
    ]
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover opacity-40 border-b-2 border-black"
                        src="/assets/1.jpg"
                    />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  ">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-200">
                        A Charming Cottage
                        <span className="block">
                            in the heart of the English Lake District
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-center text-xl text-gray-200">
                        This historic cottage is located in the quiet valley of
                        Little Langdale, a short drive from Ambleside and
                        Windermere. Ideal for mountain lovers in search of a
                        quiet hideaway. Dogs are welcome. Equipped with heating
                        by pellet stove and an open fireplace for cosy log fires
                        in the winter.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="">
                            <Link href={`/calendar`}>
                                <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8">
                                    See availability calendar and prices
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img
                            src="/assets/2.jpg"
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src="/assets/3.jpg"
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src="/assets/4.jpg"
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src="/assets/5.jpg"
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div className="mt-10 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <div>
                        <div className="">
                            <h1 className="text-2xl font-extrabold tracking-tight  sm:text-3xl mb-10">
                                About the cottage
                            </h1>

                            <p className="text-xl ">
                                This white-washed stone cottage enjoys an
                                isolated position with views over Little
                                Langdale Tarn and the Little Langdale valley.
                                Typical of Lakeland cottages, this building
                                dates back to the 17th-century. It has been
                                sympathetically renovated and still retains
                                it&apos;s original character, with slate floors
                                and an open fire. The cottage is equipped with a
                                kitchen and tumbledryer, but please note that
                                there is no washing machine or bathroom.
                                <br />
                                <br />
                                Local restaurants and pubs serve excellent
                                traditional dishes prepared with fresh local
                                ingredients.
                                <br />
                                <br />
                                The shops and tourist attractions of Ambleside
                                are a 20 minute drive away.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-2xl font-bold">Reviews</p>
                    <div className="mt-6">
                        {reviews.map((review, index) => (
                            <div className="mb-5" key={index}>
                                <div>{review.text}</div>
                                <div className="mt-2 text-gray-300 font-bold">
                                    {review.author}, {review.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative  py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider uppercase">
                        The surroundings
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Popular destinations for your holidays
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-300">
                        From challenging mountain trails to beautiful lakes and
                        historic market towns, there is lots to discover within
                        an easy day trip
                    </p>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {destinations.map((destination, index) => (
                                <div className="pt-6" key={index}>
                                    <div className="  rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <h3 className="mt-8 text-lg font-medium  tracking-tight text-white">
                                                {destination.name}
                                            </h3>
                                            <p className="mt-5 text-base text-gray-200">
                                                {destination.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
