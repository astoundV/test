function isEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') return a === b;

    var p, t;
    for (p in a) {
        if (typeof b[p] === 'undefined') {
            return false;
        }

        if (b[p] && !a[p]) {
            return false;
        }

        t = typeof a[p];
        if (t === 'object' && !isEqual(a[p], b[p])) {
            return false;
        }

        if (t === 'function' && (typeof b[p] === 'undefined' || a[p].toString() !== b[p].toString())) {
            return false;
        }

        if (a[p] !== b[p]) {
            return false;
        }
    }

    for (p in b) {
        if (typeof a[p] === 'undefined') {
            return false;
        }
    }

    return true;
}

function find(arr, value) {
    return arr.findIndex(function (element) {
        return isEqual(element, value)
    })
}

console.log(find([1, 2, 3, 4, 5], 10));
console.log(find([{}, {}, {}, {a: 1}], 1));



