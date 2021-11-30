const { bruteforce } = require("./bruteforce");
const { sumHashes } = require("./sumHashes");
const { sumSqrHashes } = require("./sumSqrHashes");
const { rabinKarp } = require("./rabinKarp");

describe("Короткая строка", () => {
  it("bruteforce", () => {
    const result = bruteforce("abababa", "ab");
    expect(result).toEqual([0, 2, 4]);
  });

  it("sumHashes", () => {
    const result = sumHashes("abababa", "ab");
    expect(result).toEqual({
      collision: 6,
      index: [0, 2, 4],
    });
  });

  it("sumSqrHashes", () => {
    const result = sumSqrHashes("abababa", "ab");
    expect(result).toEqual({
      collision: 6,
      index: [0, 2, 4],
    });
  });

  it("rabinKarp", () => {
    const result = rabinKarp("abababa", "ab");
    expect(result).toEqual({
      collision: 3,
      index: [0, 2, 4],
    });
  });
});

describe("Строка из повторяющегося символа", () => {
  it("bruteforce", () => {
    const result = bruteforce("aaaaaaaaaab", "aab");
    expect(result).toEqual([8]);
  });

  it("sumHashes", () => {
    const result = sumHashes("aaaaaaaaaab", "aab");
    expect(result).toEqual({
      collision: 1,
      index: [8],
    });
  });

  it("sumSqrHashes", () => {
    const result = sumSqrHashes("aaaaaaaaaab", "aab");
    expect(result).toEqual({
      collision: 1,
      index: [8],
    });
  });

  it("rabinKarp", () => {
    const result = rabinKarp("aaaaaaaaaab", "aab");
    expect(result).toEqual({
      collision: 1,
      index: [8],
    });
  });
});

describe("Длинная строка из повторяющегося символа", () => {
  it("bruteforce", () => {
    const result = bruteforce(
      "a".repeat(500005) + "b" + "a".repeat(500005) + "b",
      "aaaaab"
    );
    expect(result).toEqual([500000, 1000006]);
  });

  it("sumHashes", () => {
    const result = sumHashes(
      "a".repeat(500005) + "b" + "a".repeat(500005) + "b",
      "aaaaab"
    );
    expect(result).toEqual({
      collision: 7,
      index: [500000, 1000006],
    });
  });

  it("sumSqrHashes", () => {
    const result = sumSqrHashes(
      "a".repeat(500005) + "b" + "a".repeat(500005) + "b",
      "aaaaab"
    );
    expect(result).toEqual({
      collision: 7,
      index: [500000, 1000006],
    });
  });

  it("rabinKarp", () => {
    const result = rabinKarp(
      "a".repeat(500005) + "b" + "a".repeat(500005) + "b",
      "aaaaab"
    );
    expect(result).toEqual({
      collision: 2,
      index: [500000, 1000006],
    });
  });
});
