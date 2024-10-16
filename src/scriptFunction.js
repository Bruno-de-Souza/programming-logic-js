let getUserName = getFirstName('Bruno Moreira de Souza');

console.log(getUserName);

function getFirstName(name) {

    let firstName = name.split(" ")[0];
    return firstName;

}