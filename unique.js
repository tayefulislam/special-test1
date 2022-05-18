function uniqueValue(arr) {
    let duplicate = [];
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    duplicate.push(arr[j])

                }
            }

        }
    }
    // get unique
    for (let i = 0; i < arr.length; i++) {
        if (duplicate.indexOf(arr[i]) === -1) {
            unique.push(arr[i])
        }
    }

    // sort
    let sorted = unique.sort(function (a, b) {
        return a - b
    })

    return sorted;



}
const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
console.log(uniqueValue(arr))