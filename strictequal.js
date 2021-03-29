const strictEqual = (a, b) => {
    if (typeof a == typeof b && a == b) {
        return true;
    }
    return false;
};
module.exports = strictEqual
