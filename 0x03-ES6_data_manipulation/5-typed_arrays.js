export default function createInt8TypedArray(length, position, value) {
  const newArrayBuffer = new ArrayBuffer(length);

  const int8array = new Int8Array(newArrayBuffer);

  if (position < 0 || position >= int8array.length) {
    throw new Error('Position outside range');
  }

  int8array[position] = value;
  return new DataView(newArrayBuffer);
}
