export default function appendToEachArrayValue(array, appendString) {
  const apArray = [];
  for (const value of array) {
    apArray.push(appendString + value);
  }

  return apArray;
}
