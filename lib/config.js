export default {
    costs: {
        default_weekday: 30,
        default_weekend: 50,

        custom: {
            2022: {
                8: {
                    //more expensive in August
                    default_weekday: 70,
                    default_weekend: 170,
                    24: 100,
                    25: 100,
                },
            },
        },
    },
    blocked: {
        2022: {
            11: [20, 21, 22], //maintenance
        },
    },
    booked: {
        2022: {
            8: [17, 24, 25], //prebooked?
        },
    },
}
