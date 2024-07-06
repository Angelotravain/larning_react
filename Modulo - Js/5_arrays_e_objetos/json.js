

// conhecendo o json

const myJson = '{"name": "Angelo","age": "27"}'

console.log(myJson);

// json para objeto e objeto para json

const mybject = JSON.parse(myJson);

console.log(mybject);

console.log(mybject.name);

const myNewJson = JSON.stringify(mybject);

console.log(myNewJson);
console.log(typeof myNewJson);