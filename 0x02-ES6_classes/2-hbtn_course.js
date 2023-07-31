export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(lenght) {
    if (typeof lenght !== 'number') {
      throw TypeError('Lenght must be a number');
    }
    this._lenght = lenght;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Must be an array');
    }
    this._students = students;
  }
}
