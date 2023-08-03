export default function updateUniqueItems(newMap) {
  if (newMap instanceof Map) {
    for (const [key, value] of newMap) {
      if (value === 1) {
        newMap.set(key, 100);
      }
    }
  } else {
    throw new Error("Cannot process");
  }
  return newMap;
}
