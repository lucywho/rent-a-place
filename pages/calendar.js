import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import "react-day-picker/dist/style.css"
import { DayPicker } from "react-day-picker"

import prisma from "lib/prisma"

import { getCost, calcTotalCostOfStay } from "lib/cost"
import { getBookedDates } from "lib/bookings"
import {
    isDaySelectable,
    addDayToRange,
    getDatesBetweenDates,
    getBlockedDates,
    calcNumberOfNightsBetweenDates,
} from "lib/dates"

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

const sixMonthsFromNow = new Date()
sixMonthsFromNow.setDate(sixMonthsFromNow.getDate() + 30 * 6)

export default function Calendar({ bookedDates }) {
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [numberOfNights, setNumberOfNights] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const handleDayClick = (day) => {
        const range = addDayToRange(day, {
            from,
            to,
        })

        if (!range.to) {
            if (!isDaySelectable(range.from, bookedDates)) {
                alert("Date not available")
                return
            }
            range.to = range.from
        }

        if (range.to && range.from) {
            if (!isDaySelectable(range.to, bookedDates)) {
                alert("The end date cannot be selected")
                return
            }
        }

        const daysInBetween = getDatesBetweenDates(range.from, range.to)

        for (const dayInBetween of daysInBetween) {
            if (!isDaySelectable(dayInBetween, bookedDates)) {
                alert("Some of your selected dates are not available")
                return
            }
        }

        setFrom(range.from)
        setTo(range.to)

        setNumberOfNights(
            calcNumberOfNightsBetweenDates(range.from, range.to) + 1
        )
        setTotalCost(calcTotalCostOfStay(range.from, range.to))
    }

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2"></div>

                    <div className="absolute inset-0 ">
                        <Image
                            className="h-full w-full object-cover opacity-40 border-b-2 border-black"
                            src="/assets/1.jpg"
                            layout="fill"
                            alt="photo of cottage"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 mix-blend-multiply "></div>
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-200 ">
                            High Hallgarth
                            <span className="block">Cottage</span>
                        </h1>{" "}
                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 ">
                                <Link href={`/`}>
                                    <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-800 hover:text-gray-200 sm:px-8">
                                        ⬅ Back to the cottage details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-10  mx-auto ">
                    <p className="text-2xl font-bold text-center my-10 mx-auto  ">
                        Availability and prices per night
                    </p>
                    <p className="text-center">
                        {numberOfNights > 0 &&
                            `Stay for ${numberOfNights} night`}
                        {numberOfNights > 1 && `s`}
                    </p>
                    <p className="text-center mt-2">
                        {totalCost > 0 && `Total cost: €${totalCost}`}
                    </p>
                    <p className="text-center w-2/3 mx-auto ">
                        {numberOfNights > 0 && (
                            <button
                                className="border mr-2 px-2 py-1 mt-4 font-bold rounded-md hover:bg-green-300 hover:text-green-900 bg-blue-200 text-gray-900"
                                onClick={async () => {
                                    const res = await fetch(
                                        "/api/stripe/session",
                                        {
                                            body: JSON.stringify({
                                                from,
                                                to,
                                            }),
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                            method: "POST",
                                        }
                                    )
                                    const data = await res.json()
                                    const sessionId = data.sessionId
                                    const stripePublicKey = data.stripePublicKey

                                    const stripe = Stripe(stripePublicKey)
                                    const { error } =
                                        await stripe.redirectToCheckout({
                                            sessionId,
                                        })

                                    if (error) console.log(error)
                                }}
                            >
                                Book now
                            </button>
                        )}
                        {from && to && (
                            <button
                                className="border px-2 py-1 mt-4 rounded-md hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => {
                                    setFrom(null)
                                    setTo(null)
                                    setNumberOfNights(0)
                                    setTotalCost(0)
                                }}
                            >
                                Clear selection
                            </button>
                        )}
                    </p>

                    <div className="pt-6 flex justify-center availability-calendar mx-auto w-full ">
                        <DayPicker
                            components={{
                                DayContent: (props) => (
                                    <div
                                        className={`relative text-right  ${
                                            !isDaySelectable(
                                                props.date,
                                                bookedDates
                                            ) && "text-gray-500"
                                        }`}
                                    >
                                        <div>{props.date.getDate()}</div>
                                        {isDaySelectable(
                                            props.date,
                                            bookedDates
                                        ) && (
                                            <div>
                                                <span
                                                    className={`bg-gray-100 text-gray-900 rounded-md font-bold text-sm px-1`}
                                                >
                                                    €{getCost(props.date)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ),
                            }}
                            mode="range"
                            selected={[from, { from, to }]}
                            onDayClick={handleDayClick}
                            disabled={[
                                ...getBlockedDates(),
                                ...bookedDates,
                                {
                                    from: new Date("0000"),
                                    to: yesterday,
                                },
                                {
                                    from: sixMonthsFromNow,
                                    to: new Date("4000"),
                                },
                            ]}
                            modifiers={{ start: from, end: to }}
                            showWeekNumber
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    let bookedDates = await getBookedDates(prisma)
    bookedDates = JSON.parse(JSON.stringify(bookedDates))

    return {
        props: {
            bookedDates,
        },
    }
}
