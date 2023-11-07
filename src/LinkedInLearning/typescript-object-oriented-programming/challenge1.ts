class User {
  firstName!: string;
  lastName!: string;
  protected email!: string;
  get getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  checkEmail(testEmail: string): boolean {
    return testEmail === this.email;
  }
}

class Admin extends User {
  // constructor(firstName: string, lastName: string, email: string) {
  //   super();
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  // }
  shareEmail() {
    return this.email;
  }
}

const myPerson = new Admin();
console.log(myPerson.shareEmail);
// EXAMPLE error for protected
// console.log(myPerson.email);

class someClass {
  readonly noOverwrite: string;
  constructor(noOverwrite: string) {
    this.noOverwrite = noOverwrite;
  }
}
const someNewThing = new someClass("myVal");

// EXAMPLE error for readonly
// someNewThing.noOverwrite = "new string";

// class Admin implements User {
//   firstName!: string;
//   lastName!: string;
//   email!: string;
//   get getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   checkEmail(testEmail: string): boolean {
//     return testEmail === this.email;
//   }
//   isAdmin(): boolean {
//     return true;
//   }
// }

// class Guest implements User {
//   firstName!: string;
//   lastName!: string;
//   email!: string;
//   get getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   checkEmail(testEmail: string): boolean {
//     return testEmail === this.email;
//   }
//   isAdmin(): boolean {
//     return false;
//   }
// }
