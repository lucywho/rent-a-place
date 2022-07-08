import Link from "next/link"
import Image from "next/image"

export default function Success() {
    return (
        <div className="relative">
            <div className="absolute inset-0">
                <Image
                    className="h-full w-full object-cover opacity-40 border-b-2 border-black"
                    src="/assets/1.jpg"
                    layout="fill"
                    alt="photo of cottage"
                />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  ">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-200">
                    Your booking has been successful
                    <span className="block font-normal text-2xl">
                        You will receive a confirmation email shortly.
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-center text-xl text-gray-200"></p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="">
                        <Link href={`/`}>
                            <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8">
                                ⬅ Back to the cottage details
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
