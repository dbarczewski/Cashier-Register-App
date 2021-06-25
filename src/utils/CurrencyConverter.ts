export const convertNumberToEUR = (value: number | string): string => {
  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(parsedValue);
};

export const appendToString = (value1: number, value2: number): string => {
  return value1 + "" + value2;
};

// 0
// 0 + 1 => 0.01
// 5.32 + 1 => 53,21
