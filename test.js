/**
 * Created by KFisher on 10/11/13.
 */
'use strict';

describe('Three Middle Digit Tests', function() {
    var chai = require('chai');
    var expect = chai.expect,
        assert = chai.assert,
        should = chai.should(),
        tmd = require('./threeMiddleDigits.js');

    it('should exist', function () {
        expect(tmd).to.not.equal(undefined);
    });

    it('should get three middle digits of 100', function (){
        expect(tmd.getThreeMiddleDigits(100)).to.equal('100');
    });

    it('should get three middle digits of -100', function (){
        expect(tmd.getThreeMiddleDigits(-100)).to.equal('100');
    });

    it('should get three middle digits of 1000', function (){
        expect(tmd.getThreeMiddleDigits(1000)).to.equal('000');
    });

    it('should get three middle digits of -1000', function (){
        expect(tmd.getThreeMiddleDigits(-1000)).to.equal('000');
    });

    it('should get three middle digits of 12345', function (){
        expect(tmd.getThreeMiddleDigits(12345)).to.equal('234');
    });

    it('should get three middle digits of -12345', function (){
        expect(tmd.getThreeMiddleDigits(-12345)).to.equal('234');
    });

    it('should get three middle digits of 1234567890', function (){
        expect(tmd.getThreeMiddleDigits(123456789)).to.equal('456');
    });

    it('should get three middle digits of -123456789', function (){
        expect(tmd.getThreeMiddleDigits(-123456789)).to.equal('456');
    });

    it('should throw an exception when the integer is undefined', function() {
        expect(function() { tmd.getThreeMiddleDigits(undefined) }).to.throw(Error, "'integer' is undefined.");
    });

    it('should throw an exception when a number does not contain 3 digits', function() {
        expect(function() { tmd.getThreeMiddleDigits(-1) }).to.throw("'integer' value does not contain at least 3 numeric digits.");
    });

    it('should throw an exception when a number is not a number', function() {
        expect(function() { tmd.getThreeMiddleDigits('abc123') }).to.throw("'integer' is not an integer.");
    });
});
