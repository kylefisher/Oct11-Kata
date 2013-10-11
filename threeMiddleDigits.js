/**
 * Created by KFisher on 10/11/13.
 */
function getThreeMiddleDigits(integer) {
    if (integer === undefined) {
        throw new Error("'integer' is undefined.");
    }

    if (integer !== parseInt(integer)) {
        throw new Error("'integer' is not an integer.");
    }

    if (integer > -100 && integer < 100) {
        throw new Error("'integer' value does not contain at least 3 numeric digits.");
    }

    var intAsString = integer.toString();

    if (integer < 0) {
        intAsString = intAsString.substring(1);
    }

    var startPosition = Math.floor(intAsString.length / 2) - 1;
    return intAsString.substring(startPosition, startPosition + 3);
}

module.exports.getThreeMiddleDigits = getThreeMiddleDigits;