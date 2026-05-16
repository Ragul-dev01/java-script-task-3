// Task 1 - Student Attendance System

let presentStudents = ["Ragul", "Kumar"];
let absentStudents = ["Arun", "Vijay"];

// merge using spread
let allStudents = [...presentStudents, ...absentStudents];

// add new student
allStudents.push("Suresh");

// output
console.log("Final Students List:", allStudents);

// Task 2 - E-Commerce Cart

let mobile = {
    name: "iPhone",
    price: 70000
};

let charger = {
    type: "Fast Charger",
    price: 2000
};

// merge objects
let cart = {
    ...mobile,
    ...charger
};

// add delivery date
cart.deliveryDate = "20-05-2026";

// output
console.log("Final Cart:", cart);

// Task 3 - Food Delivery App

function orderFood(...items) {
    console.log("Total Items:", items.length);
    console.log("First Item:", items[0]);
    console.log("Last Item:", items[items.length - 1]);
}

// call function
orderFood("Pizza", "Burger", "Biryani");

// Task 4 - Employee Salary Filter

let employees = [
    { name: "Ragul", salary: 60000 },
    { name: "Kumar", salary: 40000 },
    { name: "Arun", salary: 70000 }
];

// filter
let highSalary = employees.filter(emp => emp.salary > 50000);

// output
console.log("Filtered Employees:", highSalary);

// Task 5 - Online Game Score Board

let scores = [100, 200, 150, 250];

// total using reduce
let total = scores.reduce((sum, score) => sum + score, 0);

// output
console.log("Total Score:", total);