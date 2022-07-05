import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import "react-day-picker/dist/style.css"
import { DayPicker } from "react-day-picker"

import { getCost } from "lib/cost"
import { isDaySelectable, addDayToRange, getDatesBetweenDates } from "lib/dates"

export default function Calendar() {
    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    const handleDayClick = (day) => {
        const range = addDayToRange(day, {
            from,
            to,
        })

        if (!range.to) {
            if (!isDaySelectable(range.from)) {
                alert("Date not available")
                return
            }
            range.to = range.from
        }

        if (range.to && range.from) {
            if (!isDaySelectable(range.to)) {
                alert("The end date cannot be selected")
                return
            }
        }

        const daysInBetween = getDatesBetweenDates(range.from, range.to)

        for (const dayInBetween of daysInBetween) {
            if (!isDaySelectable(dayInBetween)) {
                alert("Some of your selected dates are not available")
                return
            }
        }

        setFrom(range.from)
        setTo(range.to)
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
                                        ⬅ Back to the house details
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

                    <div className="pt-6 flex justify-center availability-calendar mx-auto w-full ">
                        <DayPicker
                            // renderDay={/* */}
                            selected={[from, { from, to }]}
                            modifiers={{ start: from, end: to }}
                            mode="range"
                            onDayClick={handleDayClick}
                            components={{
                                DayContent: (props) => (
                                    <div
                                        className={`relative text-right  ${
                                            !isDaySelectable(props.date) &&
                                            "text-gray-500"
                                        }`}
                                    >
                                        <div>{props.date.getDate()}</div>
                                        {isDaySelectable(props.date) && (
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
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
