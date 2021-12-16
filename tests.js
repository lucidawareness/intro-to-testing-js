// Unit tests for the helloWorld function
describe('helloWorld', function () {

	it('should be a defined function', function () {
		expect(typeof helloWorld).toBe('function');
	});

	it('should return a string when called', function () {
		expect(typeof helloWorld()).toBe("string");
	});

	it('should return the string "Hello, World!" when executed', function () {
		expect(helloWorld()).toBe("Hello, World!");
	});

	it("should never return 'undefined' when called", function () {
		expect(helloWorld()).not.toBe(undefined);
	});
});

describe("sayHello", function () {

	it('should be a defined function', function () {
		expect(typeof sayHello).toBe('function');
	});

	it('should return a string when called', function () {
		expect(typeof sayHello()).toBe("string");
	});

	it('should return the string "Hello, Jane!" when executed', function () {
		expect(sayHello("Jane")).toBe("Hello, Jane!");
	});

	it('should return the string "Hello, Alex!" when executed', function () {
		expect(sayHello("Alex")).toBe("Hello, Alex!");
	});

	it('should return the string "Hello, Pat!" when executed', function () {
		expect(sayHello("Pat")).toBe("Hello, Pat!");
	});

	it('should return the string "Hello, World!" when executed', function () {
		expect(sayHello()).toBe("Hello, World!");
	});

	it('should return the string "Hello, World!" when executed', function () {
		expect(sayHello(false)).toBe("Hello, World!");
	});

});

describe("isFive", function () {

	it('should be a defined function', function () {
		expect(typeof isFive).toBe('function');
	});

	it('should return a boolean', function () {
		expect(typeof isFive()).toBe("boolean");
	});

	it('should return true', function () {
		expect(isFive(5)).toBe(true);
	});

	it('should return true', function () {
		expect(isFive("5")).toBe(true);
	});

});

describe("isEven", function () {

	it('should be a defined function', function () {
		expect(typeof isEven).toBe('function');
	});

	it('should return a boolean', function () {
		expect(typeof isEven()).toBe("boolean");
	});

	it('should return true', function () {
		expect(isEven(2)).toBe(true);
	});

	it('should return true', function () {
		expect(isEven(-4)).toBe(true);
	});

	it('should return false', function () {
		expect(isEven(3)).toBe(false);
	});

	it('should return false', function () {
		expect(isEven("banana")).toBe(false);
	});

	it('should return true', function () {
		expect(isEven(8)).toBe(true);
	});

	it('should return false', function () {
		expect(isEven(Infinity)).toBe(false);
	});

	it('should return false', function () {
		expect(isEven(true)).toBe(false);
	});

	it('should return false', function () {
		expect(isEven(false)).toBe(false);
	});

	it('should return false', function () {
		expect(isEven()).toBe(false);
	});
});

describe('isVowel', function () {

	it('should be a defined function', function () {
		expect(typeof isVowel).toBe('function');
	});

	it('should return a boolean', function () {
		expect(typeof isVowel()).toBe("boolean");
	});

	it('should return true', function () {
		expect(isVowel("a")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("A")).toBe(true);
	});

	it('should return false', function () {
		expect(isVowel("y")).toBe(false);
	});

	it('should return false', function () {
		expect(isVowel(4)).toBe(false);
	});

	it('should return false', function () {
		expect(isVowel(true)).toBe(false);
	});

	it('should return false', function () {
		expect(isVowel(false)).toBe(false);
	});

	it('should return false', function () {
		expect(isVowel("banana")).toBe(false);
	});

	it('should return false', function () {
		expect(isVowel()).toBe(false);
	});

	// rest of vowels check
	it('should return true', function () {
		expect(isVowel("e")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("i")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("o")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("u")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("E")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("I")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("O")).toBe(true);
	});

	it('should return true', function () {
		expect(isVowel("U")).toBe(true);
	});

})