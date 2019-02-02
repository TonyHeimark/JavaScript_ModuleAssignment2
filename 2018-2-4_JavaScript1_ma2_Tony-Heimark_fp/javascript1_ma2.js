//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance


createPerson.prototype.summary = function(){
    return (`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.gender}`)
}

function createPerson(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

let person1 = new createPerson("Tony", "Heimark", 23, "male");

let person2 = new createPerson("Lisa", "Peterson", 30, "female");

console.log(person1.summary());
console.log(person2.summary());

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedNum = numList.slice(4, 5);
console.log(slicedNum);

//3. Delete the last number in the array that you created above.

let lastNum = numList.pop(); // this does not remove the number completely, it is returned to the function and I have stored it in a variable for good measure.
console.log(lastNum);
console.log(numList);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function replaceFruits(capitalFruits, fruit, fruits){
    let text = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."
    text = text.replace("Strawberries", capitalFruits);
    text = text.replace("strawberries", fruits);
    text = text.replace("strawberry", fruit);
    return text;
}

let replacedFruits = replaceFruits("Bananas", "banana", "bananas");
console.log(replacedFruits);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

let footToCar = ["Man. United", "Liverpool", "Real Madrid", "Tottenham"];
console.log(footToCar);

function footballToCars(car1, car2, car3, car4){
    footToCar.splice(0, footToCar.length);
    footToCar = [car1, car2, car3, car4];
    console.log(footToCar);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

const persons = [{
    name: "Jen",
    age: 22,
    gender: "Female",
}, {
    name: "Ingrid",
    age: 31,
    gender: "Female",
}, {
    name: "Mike",
    age: 27,
    gender: "Male",
}];

function findPerson(name){
    return persons.filter(function(person){
        return person.name.toLowerCase().includes(name.toLowerCase());
    })
}

let foundPerson = findPerson("iNgRiD");
console.log(foundPerson);

//7. Create a simple function that logs the date.

function getTheDate(){
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    
    if (month < 10) {
        month = '0' + month;
    }

        return `Todays date is ${day}/${month}/${year}.`
}

let todaysDate = getTheDate();
console.log(todaysDate);