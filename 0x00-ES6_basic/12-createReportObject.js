export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };
  const obj = {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return obj;
}
