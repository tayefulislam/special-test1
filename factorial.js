// 1 : find factorial using using recursion
function factorial(i) {
    if (i == 1) {
        return i;
    }
    return i * factorial(--i)
}

console.log(factorial(9))