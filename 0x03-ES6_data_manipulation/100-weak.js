export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Initialize a variable to keep track of the number of times the endpoint is called
  let called = 0;

  // If the endpoint is already in the weakMap, retrieve the number of times it has been called
  if (weakMap.get(endpoint)) {
    called = weakMap.get(endpoint);
  }

  // Increment the number of times the endpoint is called and update the weakMap
  weakMap.set(endpoint, called + 1);

  // If the endpoint has been called 5 or more times, throw an error indicating high load
  if (called + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
