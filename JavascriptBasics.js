//**********************************************************//
//-------------- Variables in Javascript ---------------------//
//**********************************************************//
// Start of Variables
//alert(1)
let v1 = 67
console.log(v1);
//document.write(v1)

v1 = "Mahadev"
console.log(v1);

const author = "Shiva"
console.log(author);

// End of Variables

//**********************************************************//
//-------------- Data types in Javascript ---------------------//
//**********************************************************//
// Start of Primitive Data types

let a = null;
let b = 345;
let c = true;
let d = BigInt("345") + BigInt("7");
let e = "Sambhu";
let f = Symbol("Har Har Mahadev");
let g = undefined;

console.log(a, b, c, d, e, f);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));

// End of Primitive Data types

// Start of Non Primitive Data types

const item = {
    "Nataraj" : true,
    "Nilakantha" : false,
    "Adiyogi" : 67,
    "Bhairav" : undefined
}

console.log(item.Adiyogi, item.Bhairav, item.Nataraj);

// End of Primitive Data types


//**********************************************************//
//--------------  Operators in Javascript ------------------//
//**********************************************************//
// Start of Operators

// Start of Arithmetic Operators
let Op_a = 43;
let Op_b = 3;

// Addition(+)
console.log("Addition of two numbers is : ",Op_a + Op_b);

// Subtraction(-)
console.log("Subtraction of two numbers is : ",Op_a - Op_b);

// Multiplication(*)
console.log("Multiplication of two numbers is : ",Op_a * Op_b);

// Division(/)
console.log("Division of two numbers is : ",Op_a / Op_b);

// Exponential(**)
console.log("Exponential of two numbers is : ",Op_a ** Op_b);

// Modulo(%)
console.log("Mudulo of two numbers is : ",Op_a % Op_b);

// Incremental(++)
Op_a++;
console.log("Incremental of Op_a ", Op_a);

// Decremental(--)
Op_a--;
console.log("Decremental of Op_a ", Op_a);
// End of Arithmetic Operators

// Start of Assignment Operators
// Equal(=)
let AOa1 = 5;
console.log(AOa1);

// Plus Equal to(+=)
AOa1 += 4;
console.log(AOa1);

// Minus Equal to(-=)
AOa1 -= 1;
console.log(AOa1);

// Multiplication Equal to(*=)
AOa1 *= 2;
console.log(AOa1);

// Division Equal to(/=)
AOa1 /= 2;
console.log(AOa1);

// Modulo Equal to(%=)
AOa1 %= 3;
console.log(AOa1);

// Exponential Equal to(**=)
AOa1 **= 2;
console.log(AOa1);

// End of Assignment Operators

// Start of Comparision Operators

let Comp1 = 30;
let Comp2 = 40;

// Equal to(==)
console.log("Return the value of Comp1 == Comp2: ", Comp1 == Comp2);

// Not Equal to(!=)
console.log("Return the value of Comp1 != Comp2: ", Comp1 != Comp2);

// Equal value and type(===)
console.log("Return the value of Comp1 === Comp2: ", Comp1 === Comp2);

// Not equal value or not equal type(!==)
console.log("Return the value of Comp1 !== Comp2: ", Comp1 !== Comp2);

// Greater than(>)
console.log("Return the value of Comp1 > Comp2: ", Comp1 > Comp2);

// Less than(<)
console.log("Return the value of Comp1 < Comp2: ", Comp1 < Comp2);

// Greater than or equal to(>=)
console.log("Return the value of Comp1 >= Comp2: ", Comp1 >= Comp2);

// Less than or equal to(<=)
console.log("Return the value of Comp1 <= Comp2: ", Comp1 <= Comp2);

// Ternary Operator(?)

// End of Comparision Operators

// Start of Logical Operator
let LOa1 = 100;
let LOa2 = 200;
// Logical AND(&&)
console.log("LOa1 > 20 && LOa2 < 300 :", LOa1 > 20 && LOa2 < 300);

// Logical OR(||)
console.log("LOa1 > 20 || LOa2 < 300 :", LOa1 > 20 || LOa2 < 300);

// Logical NOT(!)
console.log(!false);
console.log(!true);

// End of Logical Operator

// End of Operators

//**********************************************************//
//--------- Conditional Expression in Javascript -----------//
//**********************************************************//
// Start of Conditional Expressions
const prompt=require("prompt-sync")({sigint:true});
let CEa = prompt("Please enter your age: ");

console.log("The type of age is ",typeof CEa);

CEa = Number.parseInt(CEa);

console.log("The type of age after type casting is ",typeof CEa);
// End of Conditional Expressions

// Start of IF statement
if(CEa < 5){
    alert("Don't drive");
}

// End of IF statement

//**********************************************************//
//-------------- Strings in Javascript ---------------------//
//**********************************************************//

const name = "Kalpa"  // String can be declared as constant
const repoCount = 50  // Integer can be declared as constant

console.log(name + " Value is " + repoCount); // This syntax is outdated
console.log(`My Name is ${name} in uppercase ${name.toUpperCase()} and my repor count is ${repoCount}`); // Modern Syntax

// Declare string with "new" keyword


//*************************************************************//
//-------------- Comparison in Javascript ---------------------//
//*************************************************************//






//*************************************************************//
//-------------------- Date in Javascript ---------------------//
//*************************************************************//

let myDate = new Date();                              // Create Date object with new keyword
console.log(myDate);          
console.log(myDate.toString());                       // It will convert to Mon Jan 2024( Today's date with string format and time zone)
console.log(myDate.toDateString());                   // It will convert today's date with string format
console.log(myDate.toISOString());                    // It will not understandable
console.log(myDate.toJSON());                         // It will not understandable
console.log(myDate.toLocaleDateString());             // It will convert date to DD/MM/YYYY format
console.log(myDate.toLocaleString());                 // It will convert date to DD/MM/YYYY, HH/MM//SS format
console.log(typeof(myDate));                          // myDate is Object type
          


let createdDate1 = new Date(2024, 0, 8, 15, 40);       // It will create Object
console.log(createdDate1.toLocaleDateString());        
console.log(createdDate1.toLocaleString());

let createdDate2 = new Date("2024-04-14");
console.log(createdDate2.toLocaleDateString());

let createdDate3 = new Date("14-2024-14");             // It will show invalid Date format
console.log(createdDate3.toLocaleDateString());

let timeStamp

//*************************************************************//
//-------------------- Objects in Javascript ---------------------//
//*************************************************************//

Object.create                                          // It Creates object( Constructor method) - This Method creates Singleton
const JsUser = {}                                      // It creates Object( Object Literals)




//*************************************************************//
//-------------------- Array in Javascript ---------------------//
//*************************************************************//

const myArray = [0, 1, 2, 3, 4, 5, "Kalpa", true];

console.log(myArray[7],myArray[0],myArray[2],myArray[6]);

//*************************************************************//
//-------------------- DOM in Javascript ---------------------//
//*************************************************************//

// Start of DOM (Document Object Model)



// End of DOM (Document Object Model)

alert(1)
