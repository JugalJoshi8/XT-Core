(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.add = function add(a, b) {
    return a + b;
}
},{}],2:[function(require,module,exports){
const { add } = require('./add');

exports.calculate = function calculate(a, b) {
    return add(a, b);
}
},{"./add":1}],3:[function(require,module,exports){
class FetchService {
    findAll() {
        return 'Find All';
    }

    findById(id) {
        return 'FindBy' + id;
    }
}

module.exports = FetchService;
},{}],4:[function(require,module,exports){
const { calculate } = require('./calculate');
console.log(calculate(10, 20));

const FetchService = require('./fetch_service');
const fs = new FetchService();
console.log(fs.findAll());
console.log(fs.findById(22));  
},{"./calculate":2,"./fetch_service":3}]},{},[4]);
