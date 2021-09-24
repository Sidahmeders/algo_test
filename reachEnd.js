
function reachTheEnd({ grid, maxTime }) {
    let rowLen = grid.length,
        colLen = grid[0].length

    let paths = new Array(rowLen)
    let moves = 0

    for (let i = 0; i < rowLen; i++) {
        paths[i] = new Array(colLen)
        for (let j = 0; j < colLen; j++) {
            paths[i][j] = 0
            console.log(i, j)
        }
    }

    // Initializing the left corner if no obstacle there
    if (grid[0][0] == '.') paths[0][0] = 1

    // Initializing first column of the 2D matrix
    for (let i = 1; i < rowLen; i++) {
        // If not obstacle
        if (grid[i][0] == '.') {
            paths[i][0] = paths[i - 1][0]
            moves++
        }
    }

    // Initializing first row of the 2D matrix
    for (let j = 1; j < colLen; j++) {
        // If not obstacle
        if (grid[0][j] == '.') {
            paths[0][j] = paths[0][j - 1]
            moves++
        }
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            // If current cell is not obstacle
            if (grid[i][j] == '.') {
                paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
                moves++
            }
        }
    }

    let end = paths[rowLen - 1][paths.length-1]
    let canReach = Boolean(end && moves <= maxTime)

    return canReach ? "Yes" : 'No'
}

/*
    TIME_COMPELXITY: O(n^2)
    SPACE_COMLEXITY: O(n * m) where n = grid[row] && m = grid[column]
*/

const testCases = [
    { 
        grid: ['..##', '#.##', '#...'], 
        maxTime: 5 
    }, // YES
    {
        grid: ['..', '..'],
        maxTime: 3  
    }, // YES
    {
        grid: ['.#', '#.'],
        maxTime: 2
    } // NO
]

function main(){
    testCases.forEach(test => {
        let res = reachTheEnd(test)
        console.log(res)
    })
}

main()
