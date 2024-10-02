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

let course: string = 'React - The Complete Guide'; // string
// course = 1234; // wrong because it's a string

let course2: string | number  = 'React - The Complete Guide'; // string or number
// course2 = 1234; // allowed because of the union type

// -------------
// Types
// -------------

type Person = {
    name: string;
    age: number;
};

let person2: Person; // object
let people2: Person[]; // Array of objects

// -------------
// Functions & Function Types
// -------------

// function add(a: number, b: number){
//     return a + b;
// }

function print(value: any){
    console.log(value);
}


// -------------
// Generics
// -------------

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split(''); // Error because it's a number

const stringArray = insertAtBeginning(['a', 'b', 'c'], '5'); // ['z', 'a', 'b', 'c']
// stringArray[0].toFixed(); // Error because it's a string