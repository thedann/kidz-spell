export function makeEmptyArray(original) {
  let copy = [];
  for (let index = 0; index < original.length; index++) {
    copy.push("");
  }
  return copy;
}