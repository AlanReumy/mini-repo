import { test, expect } from "vitest";
import chunk from "../src/chunk.js";

test("chunk test1", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("chunk test2", () => {
  expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});

test("float size", () => {
  expect(chunk(["a", "b", "c", "d"], 2.1)).toEqual([["a", "b", "c"], ["d"]]);
});

test("not size", () => {
  expect(chunk(["a", "b", "c", "d"])).toEqual([["a"], ["b"], ["c"], ["d"]]);
});
