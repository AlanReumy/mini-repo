import { test, expect } from "vitest";
import once from "../src/once.js";

test("once test", () => {
  const f = (x) => x;

  const onceF = once(f);

  //=> 3
  onceF(3);

  //=> 3
  onceF(4);
  expect(onceF(4)).toBe(3)
});
