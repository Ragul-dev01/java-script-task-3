//Task 1 - Basic Function

function welcomeUser(name){
    console.log("welcome" + name);
}
welcomeUser("Ragul");

//Task 2 - Parameter + Return

function squareNumber(num){
    return num * num
}
console.log(squareNumber(5)); // 25

//Task 3 - Object Function

let employee = {
    name: "Mohan",
    salary: 50000
};
function employeeBonus(bonus){
    let total = employee.salary + bonus;
    console.log(employee.name);
    console.log(total);
}
employeeBonus(5000);

//Task 4 - Scope Checking

function testScope(){
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
testScope();

//console.log(a);
//console.log(b);
//console.log(c);
//Requirements: Inside function , var,let,const variables work properly.
//outside function, variables are not accessible and give ReferenceError.

//Task 5 - Arrow Function

const add = (a,b) => {
    console.log(a + b);
}
add(5, 3);

//Task 6 - Callback Function

function multiply(a,b){
    return a * b;
}
function calculator(callback, a, b){
    console.log(callback(a, b));
}
calculator(multiply, 5, 2); //10

//Task 7 - Generator Function

function* offers(){
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let data = offers();
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);

//Task 8 - Default parameter

function student(name, course = "Javascript"){
    console.log(name, course);
}
student("Ragul")
student("Ragul", "Python");

//Task 9 - Currying

function multi(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}
console.log(multi(2)(3)(4)); //24

//Task 10 - Spread Operator (Array)

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [...arr1, ...arr2];
console.log(result);

//Task 11 - Object Spread

let obj1 = { name: "Rakesh"};
let obj2 = { role: "Developer"};

let resultobj = { ...obj1, ...obj2};
console.log(resultobj);

//Task 12 - Rest Operator

function numbers(...num){
    console.log(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++)
    {
        sum += num[i];
    }
    console.log(sum); 
}
numbers(1,2,3,4);

//Mini Challenge

//Student Management System

// Student array
let students = [];

// Add student (object + spread)
function addStudent(name, ...marks) {
    let student = {
        name: name,
        marks: [...marks] // spread
    };
    students.push(student);
}

// Print students
function printStudents() {
    students.forEach((s) => {
        console.log("Name:", s.name);
        console.log("Marks:", s.marks);
    });
}

// Calculate total marks (rest + reduce)
function calculateMarks(...marks) {
    return marks.reduce((a, b) => a + b, 0);
}

// Add bonus using callback
function addBonus(callback, marks, bonus) {
    let updatedMarks = marks.map(m => m + bonus);
    callback(updatedMarks);
}

// Callback function
function showUpdatedMarks(updatedMarks) {
    console.log("After Bonus:", updatedMarks);
}

// ------------------ USAGE ------------------

// Add students
addStudent("Ragul", 80, 70, 90);
addStudent("Mohan", 60, 75, 85);

// Print
printStudents();

// Calculate marks
let total = calculateMarks(80, 70, 90);
console.log("Total Marks:", total);

// Add bonus using callback
addBonus(showUpdatedMarks, [80, 70, 90], 5);

