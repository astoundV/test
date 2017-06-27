function filterRange(arr, a, b) {
    return arr.filter(element => typeof element === "number" && element >= a && element <= b)
}

console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 8));