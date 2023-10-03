const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const students = [];

    for (const line of lines.slice(1)) {
      const [firstname, lastname, age, field] = line.split(',');
      students.push({
        firstname, lastname, age: Number(age), field,
      });
    }

    const uniqueFields = [...new Set(students.map((student) => student.field))];
    const totalCount = students.length;

    console.log(`Number of students: ${totalCount}`);

    for (const field of uniqueFields) {
      const fieldStudents = students.filter((student) => student.field === field);
      const count = fieldStudents.length;
      const firstnames = fieldStudents.map((student) => student.firstname).join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${firstnames}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
