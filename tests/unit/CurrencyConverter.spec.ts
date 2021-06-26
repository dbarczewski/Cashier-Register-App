import { removeLastDigit } from "./../../src/utils/CurrencyConverter";
import {
  addToNumber,
  calculatePossibleAmounts,
} from "@/utils/CurrencyConverter";

describe("possibleAmounts", () => {
  describe("should return correct amounts for", () => {
    it("should return correct amounts for single digit number without decimals", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(3.0);
      expect(first).toBe(3.0);
      expect(second).toBe(4);
      expect(third).toBe(10);
      expect(forth).toBe(20);
      expect(fifth).toBe(50);
      expect(rest.length).toBe(0);
    });
    it("should return correct amounts for single digit number without decimals", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(9);
      expect(first).toBe(9);
      expect(second).toBe(10);
      expect(third).toBe(50);
      expect(forth).toBe(100);
      expect(fifth).toBe(200);
      expect(rest.length).toBe(0);
    });
    it("should return correct amounts for single digit number with one decimal", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(3.5);
      expect(first).toBe(3.5);
      expect(second).toBe(4);
      expect(third).toBe(10);
      expect(forth).toBe(20);
      expect(fifth).toBe(50);
      expect(rest.length).toBe(0);
    });
    it("single digit number with two decimals", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(3.12);
      expect(first).toBe(3.12);
      expect(second).toBe(4);
      expect(third).toBe(10);
      expect(forth).toBe(20);
      expect(fifth).toBe(50);
      expect(rest.length).toBe(0);
    });
    it("numbers which are less than 1 with one decimal", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(0.2);
      expect(first).toBe(0.2);
      expect(second).toBe(1);
      expect(third).toBe(2);
      expect(forth).toBe(5);
      expect(fifth).toBe(10);
      expect(rest.length).toBe(0);
    });
    it("numbers which are less than 1 with two decimals", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(0.89);
      expect(first).toBe(0.89);
      expect(second).toBe(1);
      expect(third).toBe(2);
      expect(forth).toBe(5);
      expect(fifth).toBe(10);
      expect(rest.length).toBe(0);
    });
    it("numbers which is exactly 1", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(1);
      expect(first).toBe(1);
      expect(second).toBe(2);
      expect(third).toBe(10);
      expect(forth).toBe(20);
      expect(fifth).toBe(50);
      expect(rest.length).toBe(0);
    });
    it("numbers which over 10 but less than 50 without digits", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(12);
      expect(first).toBe(12);
      expect(second).toBe(20);
      expect(third).toBe(50);
      expect(forth).toBe(100);
      expect(fifth).toBe(200);
      expect(rest.length).toBe(0);
    });
    it("numbers which over 10 but less than 50 with digits", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(18.23);
      expect(first).toBe(18.23);
      expect(second).toBe(20);
      expect(third).toBe(50);
      expect(forth).toBe(100);
      expect(fifth).toBe(200);
      expect(rest.length).toBe(0);
    });
    it("numbers which over 50 but less than 100 without digits", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(56);
      expect(first).toBe(56);
      expect(second).toBe(60);
      expect(third).toBe(100);
      expect(forth).toBe(200);
      expect(fifth).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which over 50 but less than 100 with digits", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(78.89);
      expect(first).toBe(78.89);
      expect(second).toBe(80);
      expect(third).toBe(100);
      expect(forth).toBe(200);
      expect(fifth).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which is exactly 50", () => {
      const [first, second, third, forth, fifth, ...rest] =
        calculatePossibleAmounts(50);
      expect(first).toBe(50);
      expect(second).toBe(60);
      expect(third).toBe(100);
      expect(forth).toBe(200);
      expect(fifth).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which is exactly 100", () => {
      const [first, second, third, ...rest] = calculatePossibleAmounts(100);
      expect(first).toBe(100);
      expect(second).toBe(200);
      expect(third).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which is over 100 and less than 500", () => {
      const [first, second, third, ...rest] = calculatePossibleAmounts(256);
      expect(first).toBe(256);
      expect(second).toBe(300);
      expect(third).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which is over 100 and less than 400", () => {
      const [first, second, third, ...rest] = calculatePossibleAmounts(359);
      expect(first).toBe(359);
      expect(second).toBe(400);
      expect(third).toBe(500);
      expect(rest.length).toBe(0);
    });
    it("numbers which is over 900 and less than 1000", () => {
      const [first, second, ...rest] = calculatePossibleAmounts(943);
      expect(first).toBe(943);
      expect(second).toBe(1000);
      expect(rest.length).toBe(0);
    });
    it("numbers which is exactly 1000", () => {
      const [first, ...rest] = calculatePossibleAmounts(1000);
      expect(first).toBe(1000);
      expect(rest.length).toBe(0);
    });
    it("numbers which is more than 400 but less than 900 with digits", () => {
      const [first, second, third, ...rest] = calculatePossibleAmounts(569.23);
      expect(first).toBe(569.23);
      expect(second).toBe(600);
      expect(third).toBe(1000);
      expect(rest.length).toBe(0);
    });
  });
});

describe("addToNumber", () => {
  it("should two single digit numbers without decimal", () => {
    const result = addToNumber("1", "1");
    expect(result).toBe(".11");
  });
  it("should two single digit numbers with decimal", () => {
    const result = addToNumber("11.23", "1");
    expect(result).toBe("112.31");
  });
  it("should two single digit numbers without decimal", () => {
    const result = addToNumber("0.42", "9");
    expect(result).toBe("04.29");
  });
});

describe("removeFirstDigit", () => {
  it("should remove the first digit", () => {
    const result = removeLastDigit("1.23");
    expect(result).toBe(".23");
  });
  it("should remove the first digit", () => {
    const result = removeLastDigit("1243.23");
    expect(result).toBe("243.23");
  });
  it("should remove the first digit", () => {
    const result = removeLastDigit("123.00");
    expect(result).toBe("23.00");
  });
  it("should stay the same if number is 0.00", () => {
    const result = removeLastDigit("0.00");
    expect(result).toBe("0.00");
  });
});
