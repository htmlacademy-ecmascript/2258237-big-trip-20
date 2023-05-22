import {getRandomArrayElement} from "../utils.js";

const mockPoints = [
    {
        id: 1,
        type: 'Taxi',
        destination: Moscow,
        dateFrom: '2019-07-10T22:15',
        dateTo: '2019-07-10T23:35',
        basePrice: 1100,
        offers: [1, 2]
    }
]


function getRandomPoint() {
    getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
