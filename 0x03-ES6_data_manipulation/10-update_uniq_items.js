export default function updateUniqueItems(newMap) {
  for (const [key, value] of newMap) {
    if (value === 1) {
      newMap.set(key, 100);
    }
  }
  if (!(newMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  return newMap;
}
