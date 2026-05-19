// 1. API Task - User Names Upper case

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res. json())
.then(data => {
    let usernames = data.map(user => user.username. toUpperCase());

    console.log(usernames);

})
.catch(err => console.log(err));

// 2. API Task - Expensive Products

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

    // filter products > 100

    let expensiveproducts = data.filter(product => product.price > 100);

    // print result

    console.log(expensiveproducts);
    
})
.catch(err => console.log(err));

// 3. Date Concept Task - Digital Clock

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(hours + " : " + minutes + " : "+ seconds);

// 4. String Concept Task - Username Checker

let name = "  Naveen Kumar  ";

//remove spaces

let trimmedName = name.trim();

// convert to uppercase

let upperName = trimmedName.toUpperCase();

// check includes 

let check = upperName.includes("KUMAR")

// print output

console.log("Original:", name);
console.log("Trimmed:", trimmedName);
console.log("Upeercase:", upperName);
console.log("Contains kUMAR:", check);

// 5. Array Concept Task - Student Rank System

let marks = [450, 300, 700, 200, 900];

// sort high to low

let sortedMarks = marks.sort((a,b) => b-a);

// top 3 marks 

let top3 = sortedMarks.slice(0, 3);

// print poutput

console.log("Sorted Marks:", sortedMarks);
console.log("Top 3 Marks:", top3);










    


