function duplicates(arr) {
    let duplicate = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    duplicate.push(arr[j])

                }
            }

        }
    }
    console.log(duplicate)
    return duplicate.length
}
const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
console.log(duplicates(arr))