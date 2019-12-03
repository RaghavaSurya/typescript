function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "Doe" };
document.body.textContent = greeter(user);
