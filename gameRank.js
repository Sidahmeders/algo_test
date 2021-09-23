/*
    Complete the ‘numPlayers’ function below.
    The function is expected to return an INTEGER.
    The function accepts following parameters:
    1. INTEGER k
    2. INTEGER_ARRAY scores
*/

function numPlayers({ k, scores }) {
    scores = scores.sort((a, b) => b - a)

    let levelUp = 0
    let lastScore = scores[0]

    for (let score of scores) {
        if (score > 0 && k) {
            k--
            levelUp++
            lastScore = score
        }
    }

    let lastPlayerScore = scores[scores.length-1]
    if (lastScore == lastPlayerScore) {
        levelUp++
    }

    return levelUp
}

/*
TIME_COMPELXITY:  O(n^2 + m) where m = n = scores.length
SPACE_COMLEXITY: O(n) where n = scores.length
*/

const testCases = [
    { k: 3, scores: [100, 50, 50, 25] }, // 3
    { k: 4, scores: [20, 40, 60, 80, 100] }, // 4
    { k: 4, scores: [2, 2, 3, 4, 5] } // 5
]

function main(){
    testCases.forEach(test => {
        let res = numPlayers(test)
        console.log(res)
    })
}

main()