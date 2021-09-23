/*
    Complete the ‘carParkingRoof’ function below.
    The function is expected to return a LONG_INTEGER.
    The function accepts following parameters:
    1. INTEGER k
    2. LONG_INTEGER_ARRAY cars
*/

function carParkingRoof({ k, cars }) {
    cars = cars.sort((a, b) => a - b)

    // console.log(cars)
    
    let startSpot = 0, 
        endSpot = cars.length

    let minRoofLength = cars[endSpot-1]

    for (let i = startSpot; i < endSpot; i++) {
        let roofSpan = cars[i+k-1]
        let currentMin = Math.min(minRoofLength, roofSpan - 1)

        if (currentMin) minRoofLength = currentMin
    }

    return minRoofLength
}

/*
    TIME_COMPELXITY: O(n^2 + m) where m = n = cars.length
    SPACE_COMLEXITY: O(n) where n = cars.length
*/

const testCases = [
    { k: 3, cars: [6, 2, 12, 7] }, // 6
    { k: 3, cars: [2, 10, 8, 17] }, // 9
    { k: 4, cars: [1, 2, 3, 10] }, // 10

    { k: 4, cars: [6, 2, 12, 7] }, // 11
    { k: 2, cars: [2, 6, 9] }, // 5
    { k: 3, cars: [2, 6, 9] } // 8
]

function main(){
    testCases.forEach(test => {
        let res = carParkingRoof(test)
        console.log(res)
    })
}

main()