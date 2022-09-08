import { test, expect } from "vitest";
//import concat from "../src/concat.js";
import { concat } from "lodash";

test("contact test", () => {
  expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
  expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
});

test("just one array", () => {
  expect(concat([1])).toEqual([1]);
});
