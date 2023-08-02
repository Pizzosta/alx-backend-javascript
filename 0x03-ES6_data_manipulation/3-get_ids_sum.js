export default function getStudentIdsSum(students) {
  const SumOfID = students.reduce((accumulator, value) => accumulator + value.id, 0);

  return SumOfID;
}
