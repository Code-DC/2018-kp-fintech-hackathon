const CREDIT_RATING = {
    '1': 0.39,
    '2': 0.34,
    '3': 0.3,
    '4': 0.27,
    '5': 0.25,
    '6': 0.23,
    '7': 0.19,
    '8': 0.15,
    '9': 0.11,
    '10': 0.7
}

const NUM_OF_CHILDREN = {
    '0': 0,
    '1': 0.05,
    '2': 0.11,
    '3': 0.2
}

export default function (income, creditRating, numOfChildren) {
    const payment = income * CREDIT_RATING[creditRating.toString()];
    return payment - payment * NUM_OF_CHILDREN[numOfChildren.toString()];
}