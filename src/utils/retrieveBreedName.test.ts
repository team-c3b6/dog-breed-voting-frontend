import { retrieveBreedName } from "./retrieveBreedName";

test("finds the breedname from the image url", () => {
  expect(
    retrieveBreedName(
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4098.jpg"
    )
  ).toBe("retriever-flatcoated");
});
