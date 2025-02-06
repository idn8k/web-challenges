import { add, subtract, divide, multiply } from "./index";

test("Returns sum a + b", () => {
  const res = add(5, 5);
  expect(res).toBe(10);
});

test("Returns subtraction a - b", () => {
  const res = subtract(5, 5);
  expect(res).toBe(0);
});

test("Returns multiplication a * b", () => {
  const res = multiply(5, 5);
  expect(res).toBe(25);
});

test("Returns devision a / b", () => {
  const res = divide(5, 5);
  expect(res).toBe(1);
});
