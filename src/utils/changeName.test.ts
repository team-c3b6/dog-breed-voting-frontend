import changeName from "./changeName";

test("changing the breed name", () => {
  expect(changeName("greyhound-italian")).toBe("Italian greyhound");
});
