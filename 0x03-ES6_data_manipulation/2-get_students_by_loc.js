export default function getStudentsByLocation(studentList, city) {
  const studentLocation = studentList.filter((students) => students.location === city);

  return studentLocation;
}
