export const convertNumberToEUR = (value: number | string): string => {
  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(parsedValue);
};

export const calculatePossibleAmounts = (value: number): number[] => {
  if (value >= 900 && value < 1000) {
    return [value, Math.floor(value / 100) * 100 + 100];
  }
  if (value >= 400 && value < 900) {
    return [value, Math.floor(value / 100) * 100 + 100, 1000];
  }
  if (value >= 100 && value < 400) {
    return [value, Math.floor(value / 100) * 100 + 100, 500];
  }
  if (value >= 40 && value < 100) {
    return [value, Math.floor(value / 10) * 10 + 10, 100, 200, 500];
  }
  if (value >= 9 && value < 40) {
    return [value, Math.floor(value / 10) * 10 + 10, 50, 100, 200];
  }
  if (value >= 1 && value < 9) {
    return [value, Math.floor(value) + 1, 10, 20, 50];
  }
  if (value < 1) {
    return [value, Math.floor(value) + 1, 2, 5, 10];
  }
  return [value];
};

// TODO:Change name of number
export const addToNumber = (
  number: string,
  value: string,
  maxAmount = 1000
): string => {
  let temp = number.replaceAll(".", "") + value;
  temp = [temp.slice(0, -2), ".", temp.slice(-2)].join("");
  if (parseFloat(temp) > maxAmount) return number;
  return temp;
};

export const removeLastDigit = (value: string): string => {
  if (value === "0.00") return value;
  const temp = value.replaceAll(".", "").slice(0, -1);
  return [temp.slice(0, -2), ".", temp.slice(-2)].join("");
};
