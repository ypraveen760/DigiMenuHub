import { sum } from "../sum";

test("this will test adation of two numbers", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
