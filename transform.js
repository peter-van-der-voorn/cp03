module.exports = transform

function transform(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const multiplied = i * j
            if (multiplied % 2 === 0) {
                sum += multiplied
            }
        }
    }
    return sum
}