// ====================================
// LESSON 7: JavaScript Basics
// ====================================

console.log("========== LESSON 7: JAVASCRIPT BASICS ==========\n");

// ========== TASK 7.1: Variables ==========
console.log("--- TASK 7.1: Variables ---");

let name = "Robert Kurian";
let age = 25;
const birthYear = 1999;
let isStudent = true;
let favoriteColors = ["blue", "green", "purple"];
let todaysDate = new Date();

console.log(`My name: ${name}`);
console.log(`My age: ${age}`);
console.log(`Birth year: ${birthYear}`);
console.log(`Am I a student?: ${isStudent}`);
console.log(`Favorite colors: ${favoriteColors}`);
console.log(`Today's date: ${todaysDate}`);
console.log(`Type of name: ${typeof name}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isStudent: ${typeof isStudent}`);
console.log();

// ========== TASK 7.2: Data Types & Operators ==========
console.log("--- TASK 7.2: Data Types & Operators ---");

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

let count = 0;
count++;
console.log(`Count after increment: ${count}`);
count--;
console.log(`Count after decrement: ${count}`);

// Exercise 2: String Operations
let firstName = "Robert";
let lastName = "Kurian";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(`Full name: ${fullName}`);
console.log(greeting);
console.log(message);
console.log(`Uppercase: ${fullName.toUpperCase()}`);
console.log(`Lowercase: ${fullName.toLowerCase()}`);
console.log(`First character: ${firstName.charAt(0)}`);
console.log(`Does name include 'Robert'?: ${fullName.includes("Robert")}`);

// Exercise 3: Comparison & Logical Operators
console.log(`\n5 > 3: ${5 > 3}`);
console.log(`5 < 3: ${5 < 3}`);
console.log(`5 === 5: ${5 === 5}`);
console.log(`5 == "5": ${5 == "5"}`);
console.log(`5 !== 3: ${5 !== 3}`);
console.log(`true && true: ${true && true}`);
console.log(`true || false: ${true || false}`);
console.log(`!true: ${!true}`);

// Challenge: Age calculations
let currentAge = 25;
let ageInDays = currentAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = new Date().getFullYear() + (100 - currentAge);

console.log(`\nAge Calculations:`);
console.log(`Age in days (approximately): ${ageInDays}`);
console.log(`Age in hours: ${ageInHours}`);
console.log(`Year I'll turn 100: ${yearTurn100}`);
console.log();

// ========== TASK 7.3: Functions ==========
console.log("--- TASK 7.3: Functions ---");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Robert"));
console.log(`Add 5 + 3 = ${add(5, 3)}`);
console.log(`Multiply 4 * 7 = ${multiply(4, 7)}`);
console.log(`Divide 10 / 2 = ${divide(10, 2)}`);
console.log(`Divide 10 / 0 = ${divide(10, 0)}`);

// Exercise 2: Built functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    const parts = fullName.split(" ");
    return parts.map(part => part[0]).join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(`\nBuilt Functions:`);
console.log(`Area of 5x10: ${calculateArea(5, 10)}`);
console.log(`20°C in Fahrenheit: ${celsiusToFahrenheit(20)}`);
console.log(`Is 4 even?: ${isEven(4)}`);
console.log(`Is 7 even?: ${isEven(7)}`);
console.log(`Initials of 'Robert Kurian': ${getInitials("Robert Kurian")}`);
console.log(`Reverse of 'hello': ${reverseString("hello")}`);

// Exercise 3: Default Parameters
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(`\nTip Calculations:`);
console.log(`Tip on $100 bill (15%): $${calculateTip(100)}`);
console.log(`Tip on $100 bill (20%): $${calculateTip(100, 20)}`);
console.log();

// ========== TASK 7.4: Control Flow ==========
console.log("--- TASK 7.4: Control Flow ---");

// Exercise 1: If/Else
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(`Grade for 95: ${getGrade(95)}`);
console.log(`Grade for 85: ${getGrade(85)}`);
console.log(`Grade for 75: ${getGrade(75)}`);
console.log(`Grade for 55: ${getGrade(55)}`);

// Exercise 2: Switch
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(`\nDay names:`);
console.log(`Day 0: ${getDayName(0)}`);
console.log(`Day 3: ${getDayName(3)}`);
console.log(`Day 6: ${getDayName(6)}`);

// Exercise 3: Loops
console.log(`\nNumbers 0-4 (for loop):`);
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(`\nNumbers 0-4 (while loop):`);
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

const colors = ["red", "green", "blue"];
console.log(`\nIterating colors (for...of):`);
for (const color of colors) {
    console.log(color);
}

// Build programs
console.log(`\nNumbers 1-100:`);
let numbers1to100 = [];
for (let i = 1; i <= 100; i++) {
    numbers1to100.push(i);
}
console.log(numbers1to100.join(", "));

console.log(`\nEven numbers 1-50:`);
let evenNumbers = [];
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers.join(", "));

console.log(`\nFizzBuzz (1-30):`);
for (let i = 1; i <= 30; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

console.log(`\nTriangle of stars (5 rows):`);
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

console.log();

// ========== MINI-PROJECT: Calculator ==========
console.log("--- MINI-PROJECT: CALCULATOR ---");

function addCalc(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyCalc(a, b) {
    return a * b;
}

function divideCalc(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return addCalc(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiplyCalc(num1, num2);
        case "/":
            return divideCalc(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(`calculate(10, "+", 5) = ${calculate(10, "+", 5)}`);
console.log(`calculate(10, "-", 5) = ${calculate(10, "-", 5)}`);
console.log(`calculate(10, "*", 5) = ${calculate(10, "*", 5)}`);
console.log(`calculate(10, "/", 5) = ${calculate(10, "/", 5)}`);
console.log(`calculate(10, "/", 0) = ${calculate(10, "/", 0)}`);
console.log(`calculate(10, "%", 3) = ${calculate(10, "%", 3)}`);
console.log(`calculate(2, "**", 3) = ${calculate(2, "**", 3)}`);

console.log("\n========== LESSON 8: ARRAYS & OBJECTS ==========\n");

// ========== TASK 8.1: Arrays ==========
console.log("--- TASK 8.1: Arrays ---");

// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];
const numArray = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(`First fruit: ${fruits[0]}`);
console.log(`Length of fruits: ${fruits.length}`);

fruits.push("grape");
console.log(`After push: ${fruits.join(", ")}`);

fruits.unshift("mango");
console.log(`After unshift: ${fruits.join(", ")}`);

fruits.pop();
console.log(`After pop: ${fruits.join(", ")}`);

fruits.shift();
console.log(`After shift: ${fruits.join(", ")}`);

// Exercise 2: Array Methods
const numbers = [1, 2, 3, 4, 5];

console.log(`\nArray Methods:`);
console.log(`Original array: ${numbers.join(", ")}`);

const doubled = numbers.map(num => num * 2);
console.log(`Doubled: ${doubled.join(", ")}`);

const evenNumbers2 = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers2.join(", ")}`);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(`First even: ${firstEven}`);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Sum: ${sum}`);

console.log(`Array includes 3?: ${numbers.includes(3)}`);

// Build exercises
const testArray = [1, 2, 3, 4, 5];
const doubled2 = testArray.map(num => num * 2);
console.log(`\nDouble array: ${doubled2.join(", ")}`);

const mixedArray = [1, -2, 3, -4, 5];
const noNegatives = mixedArray.filter(num => num > 0);
console.log(`Filter out negatives: ${noNegatives.join(", ")}`);

const firstGreater10 = [5, 8, 15, 3, 20].find(num => num > 10);
console.log(`First number > 10: ${firstGreater10}`);

const product = [2, 3, 4, 5].reduce((total, num) => total * num, 1);
console.log(`Product of [2,3,4,5]: ${product}`);

console.log();

// ========== TASK 8.2: Objects ==========
console.log("--- TASK 8.2: Objects ---");

// Exercise 1: Object Basics
const person = {
    firstName: "Robert",
    lastName: "Kurian",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(`First name (dot): ${person.firstName}`);
console.log(`Last name (bracket): ${person["lastName"]}`);
console.log(`City (nested): ${person.address.city}`);

person.age = 26;
person.email = "robert@example.com";
console.log(`Updated age: ${person.age}`);
console.log(`New email: ${person.email}`);
delete person.isStudent;
console.log(`After deletion, isStudent: ${person.isStudent}`);

// Exercise 2: Object Methods
const calculator2 = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(`\nCalculator methods:`);
console.log(`Add 5+3: ${calculator2.add(5, 3)}`);
console.log(`Subtract 10-4: ${calculator2.subtract(10, 4)}`);
console.log(`Multiply 6*7: ${calculator2.multiply(6, 7)}`);

// Exercise 3: Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(`\nObject.keys: ${Object.keys(scores).join(", ")}`);
console.log(`Object.values: ${Object.values(scores).join(", ")}`);
console.log(`Object.entries:`, Object.entries(scores));

console.log(`\nIterate through scores:`);
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

console.log();

// ========== TASK 8.3: Array of Objects ==========
console.log("--- TASK 8.3: Array of Objects ---");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(student => student.name);
console.log(`Student names: ${names.join(", ")}`);

const highAchievers = students.filter(student => student.grade > 80);
console.log(`High achievers (>80): ${highAchievers.map(s => s.name).join(", ")}`);

const charlie = students.find(student => student.name === "Charlie");
console.log(`Found Charlie:`, charlie);

const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(`Average grade: ${avgGrade.toFixed(2)}`);

const csMajors = students.filter(student => student.major === "CS");
console.log(`CS majors: ${csMajors.map(s => s.name).join(", ")}`);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(`Sorted by grade (highest first):`);
sortedByGrade.forEach(s => console.log(`  ${s.name}: ${s.grade}`));

const hasTopStudent = students.some(student => student.grade > 90);
console.log(`Any student with grade > 90?: ${hasTopStudent}`);

const allPassing = students.every(student => student.grade >= 60);
console.log(`All students passing (≥60)?: ${allPassing}`);

console.log();

// ========== MINI-PROJECT: Student Grade Tracker ==========
console.log("--- MINI-PROJECT: STUDENT GRADE TRACKER ---");

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const gradesArray = Object.values(student.grades);
        return gradesArray.reduce((sum, grade) => sum + grade, 0) / gradesArray.length;
    },
    
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(s => s.grades[subject])
            .filter(grade => grade !== undefined);
        return subjectGrades.reduce((sum, grade) => sum + grade, 0) / subjectGrades.length;
    },
    
    getTopStudent() {
        let topStudent = null;
        let maxAverage = -1;
        
        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > maxAverage) {
                maxAverage = avg;
                topStudent = student;
            }
        });
        
        return topStudent;
    },
    
    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },
    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        
        const average = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(average);
        
        let report = `\n=== Report Card for ${name} ===\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        report += `Overall Average: ${average.toFixed(2)}\nLetter Grade: ${letterGrade}`;
        
        return report;
    }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(`Alice's average: ${gradeTracker.getStudentAverage("Alice").toFixed(2)}`);
console.log(`Math average (all students): ${gradeTracker.getSubjectAverage("math").toFixed(2)}`);
console.log(`Top student: ${gradeTracker.getTopStudent().name}`);
console.log(`Struggling students: ${gradeTracker.getStrugglingStudents().map(s => s.name).join(", ")}`);
console.log(gradeTracker.generateReportCard("Alice"));
console.log(gradeTracker.generateReportCard("Bob"));

console.log();

// ========== DAILY CHALLENGES ==========
console.log("========== DAILY CHALLENGES ==========\n");

// Day 1: FizzBuzz
console.log("--- Day 1: FizzBuzz (1-30) ---");
for (let i = 1; i <= 30; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

// Day 2: Reverse String
console.log("\n--- Day 2: Reverse String ---");
function reverseString2(str) {
    return str.split("").reverse().join("");
}
console.log(`"hello" reversed: ${reverseString2("hello")}`);
console.log(`"javascript" reversed: ${reverseString2("javascript")}`);

// Day 3: Find Largest Number
console.log("\n--- Day 3: Find Largest Number ---");
function findLargestLoop(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function findLargestReduce(arr) {
    return arr.reduce((max, num) => num > max ? num : max);
}

const testArr = [3, 15, 7, 22, 11];
console.log(`Largest in [3,15,7,22,11] (loop): ${findLargestLoop(testArr)}`);
console.log(`Largest in [3,15,7,22,11] (reduce): ${findLargestReduce(testArr)}`);

// Day 4: Remove Duplicates
console.log("\n--- Day 4: Remove Duplicates ---");
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const withDupes = [1, 2, 2, 3, 4, 4, 5];
console.log(`Original: ${withDupes.join(", ")}`);
console.log(`Remove dupes (Set): ${removeDuplicatesSet(withDupes).join(", ")}`);
console.log(`Remove dupes (filter): ${removeDuplicatesFilter(withDupes).join(", ")}`);

// Day 5: Palindrome Checker
console.log("\n--- Day 5: Palindrome Checker ---");
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/\s/g, "");
    const reversed = clean.split("").reverse().join("");
    return clean === reversed;
}

console.log(`"racecar" is palindrome?: ${isPalindrome("racecar")}`);
console.log(`"hello" is palindrome?: ${isPalindrome("hello")}`);
console.log(`"A man a plan a canal Panama" is palindrome?: ${isPalindrome("A man a plan a canal Panama")}`);
console.log(`"level" is palindrome?: ${isPalindrome("level")}`);

console.log("\n========== ALL EXERCISES COMPLETED! ==========");
