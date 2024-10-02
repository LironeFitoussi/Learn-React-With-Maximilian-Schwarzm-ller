// Primitives: number, string, boolean

// More Complex Types: Arrays, Objects

// Function Types, parameters

// Primitives
let age: number;    // number
// age = 12;   // correct
// age = '12'; // wrong

let userName: string;   // string
// userName = 'Max'; // correct
// userName = 12; // wrong

let isInstructor: boolean;  // boolean
// isInstructor = true; // correct
// isInstructor = 'true'; // wrong

// let hobbies: null;  // null
// hobbies = null; // correct
// hobbies = 'null'; // wrong


// More Complex Types
let hobbies: string[];  // Array of strings

// hobbies = ['Sports', 'Cooking']; // correct
// let person: any;    // any type, can be anything but not recommended
let person: {
    name: string;
    age: number;
}; // object

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true // wrong because it doesn't have the required properties 
// };

let people: {
    name: string;
    age: number;
}[]; // Array of objects

// -------------
// Type Inference
// -------------

let course = 'React - The Complete Guide'; // string

// course = 1234; // wrong because it's a string