export default function createIteratorObject(report) {
  const result = [];
  for (const employee of Object.values(report.allEmployees)) {
    result.push(...employee);
  }
  return result;
}
