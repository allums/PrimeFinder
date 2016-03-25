var PrimeFinder = require('../PrimeFinder.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('PrimeFinder', function() {

	it('should be a function', function() {
		expect(PrimeFinder).to.be.a('function');
	});


	describe('new instance', function(){
		var newPrimeFinder = new PrimeFinder();
		it('should have a method getPrimeFinder', function(){
			expect(newPrimeFinder).to.have.property('getPrimeFinder');
			expect(newPrimeFinder.getPrimeFinder).to.be.a('function');
		});
	});

	describe('finds prime numbers', function(){
		it('should find first prime number', function(){
		var newPrimeFinder = new PrimeFinder();
			expect(getPrimeFinder).to.equal(2);
		});
	});







});



PrimeFinder();