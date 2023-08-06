interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        location: 'New York',
    },
    {
        firstName: 'Pizzosta',
        lastName: 'Ampah',
        age: 30,
        location: 'Accra',
    },
];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');

const headRow: HTMLTableRowElement = tableHead.insertRow(0);
const firstNameHeader: HTMLTableCellElement = headRow.insertCell(0);
const locationHeader: HTMLTableCellElement = headRow.insertCell(1);

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headRow.appendChild(firstNameHeader);
headRow.appendChild(locationHeader);
tableHead.appendChild(headRow);

for (const student of studentsList) {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
}

table.appendChild(tableHead);
table.appendChild(tableBody);
document.body.appendChild(table);


