export function getAnimal(arr) {
  if (!arr) return "I do not like animals at all!";
  if (arr === "cats") return "I totally love cats!";
  if (arr === "dogs") return "I like dogs!";
  return `I like ${arr}!`;
}
