//Task 1 - Student Registration Form

let name = prompt("Enter your name:");
let dept = prompt("Enter your deparetment:");
let age = prompt("Enter your age")

console.log(`Welcome ${name}`);
console.log(`Department : ${dept}`);
console.log(`Age : ${age}`);

//Task 2 - ATM Withdrawal

let balance = 10000;
let amount = prompt("Enter withdrawal amount:");

if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

//Task 3 - Swiggy Discount Checker

let orderAmount = prompt("Enter order amount:");

console.log(
    orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied"
);

//Task 4 - Instagram Login System

let username = prompt("Enter username:"). trim().toLowerCase();

if (username === "admin") {
    let password = prompt("Enter password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}

//Task 5 - Traffic Signal System

let signal = prompt("Enter signal (red/yellow/green):");

switch(signal) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid Signal");
}

//Task 6 - Employee Salary Calculator

function salaryCalculation(basic, bonus) {
    return basic + bonus;
}

console.log(salaryCalculation(25000, 5000));

//Task 7 - E-Commerce Cart Total

let prices = [100, 200, 300, 400];

let total = 0;

// for loop use for total calculate
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

// average calculate
let average = total / prices.length;

// output
console.log("Total Price : " + total);
console.log("Average Price : " + average);

//Task 8 - Whatsapp Contact Book

let contacts = {
    person1: { name: "Ragul", phone: "12345", status: "Online" },
    person2: { name: "Mohan", phone: "67890", status: "Offline" }
};

for (let key in contacts) {
    console.log("Name:", contacts[key].name);
    console.log("Phone:", contacts[key].phone);
    console.log("Status:", contacts[key].status);
}

//Task 9 - Movie Ticket Booking

function payment() {
    console.log("Payment Done");
}

function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}

bookTicket(payment);

//Task 10 - Food Delivery Time Tracker

function* delivery() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let process = delivery();

console.log(process.next().value);
console.log(process.next().value);
console.log(process.next().value);
console.log(process.next().value);