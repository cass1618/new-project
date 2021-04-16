import Line from "../src/js/line.js";
describe("Line", () => {
  test("should correctly create a line object from a string", () => {
    const line = new Line("word");
    expect(line);
    expect(line.words).toEqual(["word"]);
  });
});