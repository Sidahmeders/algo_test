/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanList = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000,
    }

    let counter = 0
    let i = 0, j = s.length
    
    while (i < j) {
        let stringLength = j - i
        let validNumber = isRomanValid(s[i], s[i+1], romanList)
        if (stringLength >= 2 && validNumber) {
            counter += validNumber
            i += 2
        } else {
            counter += romanList[s[i]]
            i += 1
        }
    }
    
    return counter
};

function isRomanValid(str1, str2, romanList) {
    let str = str1 + str2
    let isValidNumber = romanList[str]
    if (isValidNumber) {
        return isValidNumber
    }
    
    return false
}

const testCases = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV']

testCases.forEach(test => {
    let result = romanToInt(test)
    console.log(result)
})
