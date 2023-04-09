interfae Stident {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student {
    firstName: "john",
    lastName: "Doe",
    age: 19,
    location: "los angelous",
}
const stufent2: Student {
    firstName: "abel",
    lastName: "mesfin",
    age: 27,
    loation: "addis ababa",
}
const studentList: Student[] = [student1, student2];

const headerRow = table.insertRow();
const firstNameHeader = headerRaw.insertCell();
firstNameHeader.textContent = "First name";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "location";

studentList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
}

document.body.appendChild(table);
