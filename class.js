class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  whoIsOlder(user) {
    if (this.age > user.age) return console.log(this.firstName, "is older than", user.firstName);
    if (this.age < user.age) return console.log(user.firstName, "is older than", this.firstName);
    if (this.age === user.age) return console.log(this.firstName, "as the same age of", user.firstName);
  }
}

const userA = new User("Mario", "Rossi", "33", "Pescara");
const userB = new User("Carlo", "Bianchi", "23", "Crecchio");
const userC = new User("Giuseppe", "Verdi", "43", "Milano");
const userD = new User("Ubaldo", "Righetti", "33", "Milano");

userA.whoIsOlder(userB);
userA.whoIsOlder(userC);
userA.whoIsOlder(userD);
