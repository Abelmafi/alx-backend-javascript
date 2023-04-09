export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
interface Directors extends Teacher {
    int numberOfReports = 0;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
    }

interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
    constructor(public firstName: string, public lastName: string) {}
    workOnHomework(): string {
        return "Currently working";
    }
    displayNmae(): string {
        return this.firstName
    }
}

