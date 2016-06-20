var assert = require('assert');
var converter = require("../scripts/index");

describe('Test Suite 1', function () {
    it('Test 1', function () {
        assert.ok(true, "This shouldn't fail");
    })

    it('Test 2', function () {
        assert.ok(1 === 1, "This shouldn't fail");
        //assert.ok(false, "This should fail");
        assert.ok(ax.x() == 2, "oki");
    })
});

describe('Index Tests', function () {
    it('calculateMoney', function () {
        assert.ok(converter.calculateMoney(0, 0) == 0, "Wrong calculate [0,0]");
        assert.ok(converter.calculateMoney(1, 0) == 2, "Wrong calculate [1,0]");
        assert.ok(converter.calculateMoney(0, 1) == 3.8, "Wrong calculate [0,1]");
        assert.ok(converter.calculateMoney(3, 2) == 13.60, "Wrong calculate [3,2]");
    });
    it('giveMoneyBack', function () {

    });
    it('wydaj', function () {
        assert.ok(converter.wydaj(15, [15]));
        assert.ok(converter.wydaj(15, [5, 5, 5]));
        assert.fail(!converter.wydaj(15, [1, 2, 3]));
        assert.ok(converter.wydaj(15, [3, 5, 5, 0.5, 0.5, 1]));
    });
});
