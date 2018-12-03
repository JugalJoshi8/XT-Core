define(['./add'], function (add) {
    return function calculate(a, b) {
        return add(a, b);
    }
})
