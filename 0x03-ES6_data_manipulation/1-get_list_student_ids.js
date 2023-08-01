export default function getListStudentIds(myArray) {
  if (!Array.isArray(myArray)) {
    return [];
  }
  const arrID = myArray.map((students) => students.id);

  return arrID;
}
