import {division} from "./example";


describe("Division (example test case)", () => {
	it("Integer division", () => {
		expect(division(2, 1)).toBe(2);
	});

	it("Division by zero", () => {
		expect(division(2, 0)).toEqual(Infinity);  // jaja la puta madre js
	})
});
