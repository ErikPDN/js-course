function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }

    return x + y;
}

// try {
//     console.log(notExist);
// } catch (err) {
//     throw new ReferenceError(`Custom ReferenceError: ${err.message}`);
// }

try {
    console.log(sum(10, 20))
    console.log(sum(11, '11'))
} catch (err) {
    console.error(err);
}