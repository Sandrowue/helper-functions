function getSubArrays(arr, subSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += subSize) {
        let sub = arr.slice(i, i + subSize);
        result.push(sub);
    }
    return result
}
console.log(getSubArrays(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 1))