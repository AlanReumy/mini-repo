import { test, expect } from "vitest";
import compact from "../src/compact.js";

test("compact test", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});


