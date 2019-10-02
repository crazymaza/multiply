module.exports = function multiply(first, second) {
    let aArray = first.split('').reverse();
    let bArray = second.split('').reverse();
    let result = [];

    for (let i = 0; i < aArray.length; i++) {
        for (let j = 0; j < bArray.length; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += aArray[i] * bArray[j];
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 10) {
            if(!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        } 
    }
    return result.reverse().join('');
};