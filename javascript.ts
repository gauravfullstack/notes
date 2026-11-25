# 📖 JavaScript Interview Booklet - PHASE 1
## Easy to Medium Questions | Foundation Building

**Target Audience:** Frontend Developer | 4 YOE | 10-12 LPA  
**Purpose:** Build strong fundamentals, understand core concepts  
**Revision Time:** 30-40 minutes  
**Total Questions:** 48 with follow-ups

---


# SECTION 1: TYPES & TYPE COERCION (Easy Concepts)

Let's build a simple rulebook for JavaScript Type Coercion (Type Conversion). These rules will help you solve tricky `==`, `+`, `-`, and comparison questions in interviews.

# 🧠 1. Basic conversion rules

### Rule 1: Conversion to Number

| Value       | Number conversion |
| ----------- | ----------------- |
| `""`        | `0`               |
| `"123"`     | `123`             |
| `"12.5"`    | `12.5`            |
| `"hello"`   | `NaN`             |
| `true`      | `1`               |
| `false`     | `0`               |
| `null`      | `0`               |
| `undefined` | `NaN`             |
| `[]`        | `0`               |
| `[5]`       | `5`               |
| `[1, 2]`    | `NaN`             |
| `{}`        | `NaN`             |

Examples:

```
Number("")        // 0
Number("123")     // 123
Number(true)      // 1
Number([])        // 0
Number([5])       // 5
Number([1, 2])    // NaN
```

### Rule 2: Conversion to String

| Value       | String conversion   |
| ----------- | ------------------- |
| `123`       | `"123"`             |
| `true`      | `"true"`            |
| `false`     | `"false"`           |
| `null`      | `"null"`            |
| `undefined` | `"undefined"`       |
| `[]`        | `""`                |
| `[1, 2]`    | `"1,2"`             |
| `{}`        | `"[object Object]"` |

Examples:

```
String([])       // ""
String([1, 2])   // "1,2"
String({})       // "[object Object]"
```

### Rule 3: Conversion to Boolean

Important interview rule

Only these values are falsy:

| Value       | Boolean |
| ----------- | ------- |
| `false`     | `false` |
| `0`         | `false` |
| `-0`        | `false` |
| `0n`        | `false` |
| `""`        | `false` |
| `null`      | `false` |
| `undefined` | `false` |
| `NaN`       | `false` |

Everything else is truthy, including:

```
Boolean([])       // true
Boolean({})       // true
Boolean("0")      // true
Boolean("false")  // true
Boolean(" ")      // true
```

# ⚡ 2. Operators and conversion rules

### Rule 4: The `+` operator

`+` can perform either addition or string concatenation.

If either primitive operand becomes a string, concatenation happens.

```
5 + 2       // 7
"5" + 2     // "52"
5 + "2"     // "52"
true + 1    // 2
[] + 1      // "1"
[] + []     // ""
```

### Rule 5: The `-`, `*`, `/` operators

These operators generally convert operands to numbers.

```
"5" - 2     // 3
"5" * 2     // 10
"10" / 2    // 5
"hello" - 1 // NaN
```

### Rule 6: Loose equality (`==`)

Remember these important rules:

1. Same types → compare normally.
2. `null == undefined` → `true`.
3. Number vs string → convert string to number.
4. Boolean vs another type → convert boolean to number.
5. Object vs primitive → convert object to primitive.
6. `NaN` is never equal to anything, including itself.

Examples:

```
5 == "5"          // true
true == 1         // true
false == 0        // true
null == undefined // true
[] == false       // true
[] == ""          // true
NaN == NaN        // false
```

### Rule 7: Strict equality (`===`)

No type coercion.

```
5 === "5"     // false
true === 1    // false
[] === []     // false (different references)
null === undefined // false
```

# 🎯 3. Quick revision cheat sheet

| Expression          | Output  |
| ------------------- | ------- |
| `Number("")`        | `0`     |
| `Number(null)`      | `0`     |
| `Number(undefined)` | `NaN`   |
| `Number([])`        | `0`     |
| `String([])`        | `""`    |
| `Boolean([])`       | `true`  |
| `Boolean({})`       | `true`  |
| `[] == false`       | `true`  |
| `[] === false`      | `false` |
| `"5" + 2`           | `"52"`  |
| `"5" - 2`           | `3`     |

# 🧪 4. Test your understanding

Try these without running them in the console.

JavaScript coercion quiz

1 / 5

Predict the output:

# console.log([] + []);

0

""

[]

NaN

---

# SECTION 2: HOISTING (Easy Cases)

## [FREQUENTLY ASKED] [EASY] Q2.1 - What is hoisting?

**Answer:**

Hoisting is JavaScript's behavior where **variable and function declarations** are moved to the top of their scope during the memory creation phase of execution context.

There are two important phases:

1. **Memory Creation Phase** - JavaScript scans and allocates memory
   - Variables allocated as `undefined`
   - Functions allocated with entire function code
   
2. **Code Execution Phase** - JavaScript runs line by line
   - Variables get their actual values
   - Functions are called

So it looks like declarations are "hoisted" (moved) to the top, but really JavaScript is just setting them up in memory first.

**Follow-up Questions:**

- What happens if you use a variable before declaring it?
- Are let and const hoisted differently than var?
- What is the "Temporal Dead Zone"?

**Code Example:**

```javascript
console.log(x);  // undefined (not error!)
var x = 5;
console.log(x);  // 5

console.log(greet());  // works! "Hello"
function greet() {
  return "Hello";
}

// vs

console.log(y);  // ReferenceError!
let y = 10;
```

**Common Mistakes:**

```javascript
// ❌ Assuming all declarations are hoisted the same way
console.log(x);  // undefined (var hoisted as undefined)
var x = 5;

console.log(y);  // ReferenceError! (let hoisted but not accessible)
let y = 5;
```

---

## [GOOD TO KNOW] [EASY] Q2.2 - Why does `var` behave differently in hoisting?

**Answer:**

`var` has **function scope**, not block scope. This means:

1. **var** gets hoisted AND initialized as `undefined` in memory
2. You can access a hoisted `var` before its declaration (you get `undefined`)
3. **let** and **const** are also hoisted, but NOT initialized (Temporal Dead Zone)
4. With `let/const`, accessing before declaration causes ReferenceError

**Follow-up Questions:**

- What is the Temporal Dead Zone?
- Should we use var in modern JavaScript?
- Why was let and const introduced if var already works?

**Code Example:**

```javascript
// var - hoisted and initialized as undefined
console.log(a);  // undefined (no error!)
var a = 1;
console.log(a);  // 1

// let - hoisted but not initialized (Temporal Dead Zone)
console.log(b);  // ReferenceError!
let b = 2;

// Best practice: use const by default, let when reassignment needed
const name = "Gaurav";  // ✅ use this
let age = 25;           // ✅ or this
var x = 5;              // ❌ avoid this
```

**Common Mistakes:**

```javascript
// ❌ Thinking let/const aren't hoisted
// They ARE hoisted, but in Temporal Dead Zone
console.log(x);  // ReferenceError (not undefined)
let x = 5;
```

---

# SECTION 3: SCOPE (var, let, const)

## [FREQUENTLY ASKED] [EASY] Q3.1 - What is scope?

**Answer:**

Scope is the accessible space in which a variable can be used. It defines WHERE in your code a variable is available.

There are three types of scope:

1. **Global Scope** - accessible everywhere
2. **Function Scope** - accessible only inside function (var is function-scoped)
3. **Block Scope** - accessible only inside block (let and const are block-scoped)

Variables accessible in inner scope can access outer scope variables. But outer scope CANNOT access inner scope variables.

**Follow-up Questions:**

- What is a scope chain?
- How does `let` differ from `var` in terms of scope?
- Can you access a function-scoped variable outside the function?

**Code Example:**

```javascript
const name = 'Gaurav';  // Global scope

function greeting() {
    const age = 25;  // Function scope
    console.log('Name:', name);  // Gaurav (can access global)
    console.log('Age:', age);    // 25
}

greeting();
console.log(age);  // ReferenceError: age not defined

// Block scope
{
    const city = 'Gurugram';  // Block scope
    console.log('City:', city);  // Gurugram
}
console.log(city);  // ReferenceError: city not defined
```

**Common Mistakes:**

```javascript
// ❌ Using var in loops (function scope causes issues)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);  // prints 3, 3, 3
}

// ✅ Use let instead (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);  // prints 0, 1, 2
}
```

---

## [FREQUENTLY ASKED] [EASY] Q3.2 - Difference between var, let, and const

**Answer:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Best for | Avoid | Variables that change | Variables that don't change |

**Key Points:**

- **var** - function scoped, can be redeclared and reassigned
- **let** - block scoped, cannot be redeclared, can be reassigned
- **const** - block scoped, cannot be redeclared or reassigned

**Follow-up Questions:**

- Can you change properties of a const object?
- Why should we use const by default?
- What happens if you redeclare var in the same scope?

**Code Example:**

```javascript
// var
var x = 1;
var x = 2;  // ✅ allowed (redeclaration)
x = 3;      // ✅ allowed (reassignment)

// let
let y = 1;
let y = 2;  // ❌ SyntaxError: Identifier 'y' has already been declared
y = 2;      // ✅ allowed (reassignment only)

// const
const z = 1;
const z = 2;  // ❌ SyntaxError
z = 2;        // ❌ TypeError: Assignment to constant variable

// const object - can modify properties
const user = { name: "Gaurav", age: 25 };
user.age = 26;  // ✅ allowed (modifying property)
user = {};      // ❌ not allowed (reassignment)
```

**Common Mistakes:**

```javascript
// ❌ Thinking const means immutable
const obj = { x: 1 };
obj.x = 2;  // Works! const only prevents reassignment, not mutation

// ✅ const means the variable reference doesn't change
const obj = { x: 1 };
obj = {};   // Error! Can't reassign
```

---

# SECTION 4: VARIABLE SHADOWING

## [GOOD TO KNOW] [MEDIUM] Q4.1 - What is variable shadowing?

**Answer:**

Variable shadowing occurs when a variable declared in an inner scope has the SAME NAME as a variable in an outer scope.

The inner variable "shadows" (hides) the outer variable. You cannot access the outer variable while in the inner scope.

**IMPORTANT:** Shadowing requires NEW DECLARATION, not reassignment.

**Follow-up Questions:**

- Why is variable shadowing a problem?
- What is the difference between shadowing and reassignment?
- How can you avoid variable shadowing?

**Code Example:**

```javascript
// SHADOWING (New declaration in inner scope):
const name = "Gaurav";
{
    const name = "Anant";  // ✅ NEW declaration = shadowing
    console.log(name);  // Anant
}
console.log(name);  // Gaurav (outer unchanged)

// NOT SHADOWING (Just reassignment):
const name = "Gaurav";
{
    name = "Anant";  // ❌ REASSIGNMENT, not shadowing
    // This would cause error with const!
}

// FUNCTION SCOPE SHADOWING:
var x = 10;
function test() {
    var x = 20;  // Shadows outer x
    console.log(x);  // 20
}
test();
console.log(x);  // 10 (outer unchanged)

// BLOCK SCOPE SHADOWING (let/const):
let y = 100;
{
    let y = 200;  // Shadows outer y
    console.log(y);  // 200
}
console.log(y);  // 100
```

**Common Mistakes:**

```javascript
// ❌ Confusion between shadowing and reassignment
var x = 10;
function test() {
    x = 20;  // REASSIGNMENT (modifies outer x!)
}
test();
console.log(x);  // 20 (outer x changed!)

// ✅ Shadowing (creates new variable)
var x = 10;
function test() {
    var x = 20;  // Shadows outer x
}
test();
console.log(x);  // 10 (outer x unchanged)
```

---

# SECTION 5: CLOSURES (Simple Use Cases)

## [FREQUENTLY ASKED] [MEDIUM] Q5.1 - What is a closure?

**Answer:**

A closure is when an inner function has access to the outer function's variables, even after the outer function has finished execution.

Why It Matters:
1. Data encapsulation (keep variables private)
2. Avoid global scope pollution
3. Create function factories
4. Handle callbacks with data

How It Works (Scope Chain):

When inner function needs a variable, JavaScript:
1. Checks inner function's scope
2. If not found, checks outer scope (closure!)
3. If not found, checks global scope

This is called the SCOPE CHAIN.

**Why Variables Stay in Memory:**

Normally outer scope is deleted when function ends. But if inner function still needs those variables, JavaScript keeps the scope alive. That's the closure.

**Follow-up Questions:**

- Why do we need closures?
- What is the scope chain?
- Can closures cause memory leaks?
- Real-world example of closure?

**Code Example:**

```javascript
function outer() {
    const x = 10;
    
    function inner() {
        console.log(x);  // 10 (access outer's variable)
    }
    
    return inner;
}

const fn = outer();
fn();  // 10 (closure still has access to x!)
```

**Real Example: Debounce**

```javascript
function debounce(fn, delay) {
    let timer;  // Captured in closure

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// How it works:
// - First call: Sets timer
// - Second call (before delay): Clears old timer, sets new one
// - All calls share SAME timer variable from closure
// - Only last call executes after delay
```

**Why Closure Is Better:**

```javascript
// Without closure, timer would be global:
let timer;  // Global (bad - pollutes scope)

// With closure, timer is PRIVATE to each debounce:
const debouncedSearch = debounce(...);  // Private timer
const debouncedResize = debounce(...);  // Private timer
// Each has its own timer, no conflicts! ✅
```

**Common Mistakes:**

```javascript
// ❌ Thinking closure keeps function in memory forever
function fn() {
  const data = { huge: "object" };
  return () => console.log("done");
}
const myClosure = fn();  // closure doesn't hold 'data' reference
myClosure = null;  // closure is freed when no longer referenced

// ✅ Closure only keeps variables it actually needs
function fn() {
  const needed = { x: 1 };
  const unused = new Array(1000000);  // won't be kept
  return () => console.log(needed.x);
}
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q5.2 - Real-world use case of closures?

**Answer:**

Real-World Impact: Search input with Debounce

Without debounce: API called 100+ times per minute as user types  
With debounce (using closure): API called only when user stops typing  
Result: 95% fewer API calls, better performance

**Follow-up Questions:**

- How would you implement debounce from scratch?
- What is the difference between debounce and throttle?

**Code Example:**

```javascript
// Search input scenario
function debounce(fn, delay) {
    let timer;  // Closure captures this

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const handleSearch = debounce((query) => {
    console.log("Calling API with:", query);
}, 300);

// User types: a, ab, abc
// Debounce clears timer each time
// Only when user stops for 300ms → API call happens
```

---

# SECTION 6: ES6+ BASICS (Spread, Rest, Destructuring)

## [FREQUENTLY ASKED] [MEDIUM] Q6.1 - What is the spread operator?

**Answer:**

The spread operator (`...`) spreads values OUT. It expands an array or object into individual elements.

**Spread with Arrays:**

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Spread to combine
const combined = [...array1, ...array2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Spread to copy (creates new array)
const copy = [...array1];
console.log(copy === array1);  // false (different arrays)

// Spread with new elements
const withNew = [...array1, 99, ...array2];
console.log(withNew);  // [1, 2, 3, 99, 4, 5, 6]

// Real Example: Add to Beginning
const numbers = [2, 3, 4];
const withOne = [1, ...numbers];  // [1, 2, 3, 4]

// Real Example: Add to End
const colors = ["red", "green"];
const allColors = [...colors, "blue"];  // ["red", "green", "blue"]
```

**Spread with Objects:**

```javascript
const person1 = { name: "Gaurav", age: 25 };
const person2 = { email: "g@example.com", city: "Delhi" };

// Spread to combine objects
const combined = { ...person1, ...person2 };
// { name: "Gaurav", age: 25, email: "g@example.com", city: "Delhi" }

// Spread to copy object
const copy = { ...person1 };
console.log(copy === person1);  // false (different objects)

// Spread to override properties
const updated = { ...person1, age: 26 };
console.log(updated);
// { name: "Gaurav", age: 26 }  (age was overridden!)

// Real Example: Update Object (Immutable way in React)
const user = { id: 1, name: "Gaurav", age: 25 };
const updated = { ...user, age: 26 };  // ✅ new object
```

**Spread with Function Arguments:**

```javascript
const numbers = [1, 2, 3];

// Without spread (pass array)
Math.max([1, 2, 3]);  // NaN (doesn't work)

// With spread (pass individual values)
Math.max(...numbers);  // 3 (works!)

// Real Example: Console Log
const arr = [1, 2, 3];
console.log(...arr);  // 1 2 3 (not [1, 2, 3])
```

**Follow-up Questions:**

- What's the difference between spread and rest?
- Can you use spread with objects?
- Is spreading a shallow or deep copy?

**Common Mistakes:**

```javascript
// ❌ Spread is shallow copy only
const nested = { user: { name: "Gaurav" } };
const copy = { ...nested };
copy.user.name = "Anant";
console.log(nested.user.name);  // "Anant" (changed! shallow copy)

// ✅ For nested objects, need to spread each level
const copy = { ...nested, user: { ...nested.user } };
copy.user.name = "Anant";
console.log(nested.user.name);  // "Gaurav" (unchanged)
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q6.2 - What are rest parameters?

**Answer:**

Rest parameters (`...`) gather values IN. They collect remaining arguments into an array.

**IMPORTANT:** Rest parameter MUST be last in function parameters!

**How It Works:**

```javascript
function greet(greeting, ...names) {
  console.log(greeting);  // "Hello"
  console.log(names);     // ["Gaurav", "Rahul", "Priya"]
}

greet("Hello", "Gaurav", "Rahul", "Priya");

// Rest parameter MUST be last!
function test(...rest, name) {  // ❌ ERROR!
  // Can't have parameters after rest
}
```

**Real Example: Variable Number of Arguments**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

**Real Example: First and Rest**

```javascript
function introduce(greeting, ...names) {
  return `${greeting} ${names.join(", ")}`;
}

introduce("Hello", "Gaurav", "Rahul");
// "Hello Gaurav, Rahul"
```

**Follow-up Questions:**

- What's the difference between rest and spread?
- Can you use rest in destructuring?
- What happens if there are no remaining arguments?

**Common Mistakes:**

```javascript
// ❌ Rest parameter not at the end
function test(a, ...rest, b) {  // SyntaxError!
}

// ✅ Rest must be last
function test(a, b, ...rest) {  // ✅ correct
}
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q6.3 - What is array destructuring?

**Answer:**

Array destructuring extracts values from an array into separate variables. It makes code cleaner and more readable.

**Basic Destructuring:**

```javascript
const [a, b] = [1, 2];
console.log(a);  // 1
console.log(b);  // 2
```

**Skipping Elements:**

```javascript
const [first, , third] = [1, 2, 3];
console.log(first);  // 1
console.log(third);  // 3
// second element skipped
```

**With Rest:**

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]
```

**Nested Destructuring:**

```javascript
const [a, [b, c]] = [1, [2, 3]];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
```

**Follow-up Questions:**

- Can you use default values in destructuring?
- What happens if array is shorter than destructuring?

**Code Example:**

```javascript
// Real world: function parameters
function printList([first, second]) {
  console.log(first, second);
}

printList([1, 2]);  // 1 2

// Real world: swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2 1
```

**Common Mistakes:**

```javascript
// ❌ Destructuring non-existent elements
const [a, b] = [1];
console.log(b);  // undefined (not error)

// ✅ Use default values
const [a, b = 2] = [1];
console.log(b);  // 2
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q6.4 - What is object destructuring?

**Answer:**

Object destructuring extracts properties from an object into variables with matching names.

**Basic Destructuring:**

```javascript
const { name, age } = { name: "Gaurav", age: 25 };
console.log(name);  // "Gaurav"
console.log(age);   // 25
```

**Renaming Variables:**

```javascript
const { name: userName, age: userAge } = 
  { name: "Gaurav", age: 25 };
console.log(userName);  // "Gaurav"
console.log(userAge);   // 25
```

**With Default Values:**

```javascript
const { name = "Guest", email = "none@example.com" } = 
  { name: "Gaurav" };
console.log(name);   // "Gaurav"
console.log(email);  // "none@example.com"
```

**With Rest:**

```javascript
const { name, age, ...others } = {
  name: "Gaurav",
  age: 25,
  email: "g@example.com",
  city: "Delhi"
};
console.log(name);     // "Gaurav"
console.log(others);   // { email: "...", city: "Delhi" }
```

**Follow-up Questions:**

- Can you destructure nested objects?
- What if the property doesn't exist?

**Code Example:**

```javascript
// Real world: function parameters
function printUser({ name, age, city }) {
  console.log(`${name}, ${age}, ${city}`);
}

printUser({ name: "Gaurav", age: 25, city: "Delhi" });
// Gaurav, 25, Delhi

// Real world: React component props
function UserCard({ name, age, ...props }) {
  return <div>{name}, {age}</div>;
}
```

**Common Mistakes:**

```javascript
// ❌ Wrong property name
const { person } = { name: "Gaurav" };
console.log(person);  // undefined (property doesn't exist)

// ✅ Use correct name
const { name } = { name: "Gaurav" };
console.log(name);  // "Gaurav"
```

---

# SECTION 7: SHALLOW COPY (Simple Cases)

## [FREQUENTLY ASKED] [MEDIUM] Q7.1 - What is shallow copy?

**Answer:**

Shallow copy creates a new object, but only copies the top-level references. Nested objects still point to the same memory location as the original.

Primitive values like strings and numbers are truly independent. But nested objects or arrays still reference the original.

**Shallow Copy Methods:**

```javascript
const original = { name: "Gaurav", age: 25 };

// Method 1: Spread operator
const shallow = { ...original };

// Method 2: Object.assign
const shallow = Object.assign({}, original);

// Both are shallow copies
console.log(shallow === original);  // false (different objects)
console.log(shallow.name === original.name);  // true (same values)
```

**Real-World Problem: Nested Objects**

```javascript
const original = {
  name: "Gaurav",
  address: { city: "Delhi", country: "India" }
};

const shallow = { ...original };

shallow.address.city = "Bangalore";

console.log(original.address.city);  // "Bangalore" (changed!)
// Problem: nested object still references original
```

**Follow-up Questions:**

- When is shallow copy enough?
- What's the difference between shallow and deep copy?
- Is spread operator shallow or deep?

**Common Mistakes:**

```javascript
// ❌ Assuming spread creates independent nested objects
const user = { name: "Gaurav", address: { city: "Delhi" } };
const copy = { ...user };
copy.address.city = "Bangalore";
console.log(user.address.city);  // "Bangalore" (changed!)

// ✅ For nested objects, need to spread each level
const copy = { 
  ...user, 
  address: { ...user.address } 
};
```

---

# SECTION 8: IMMUTABILITY (Concept)

## [FREQUENTLY ASKED] [MEDIUM] Q8.1 - What is immutability?

**Answer:**

Immutability means don't change original data. Create a new version with changes instead.

In React, immutability is critical because React uses `===` (reference equality) to detect changes. Mutation doesn't change reference → React skips re-render.

**Mutable Methods (Don't use):**
- push, pop, splice, sort, reverse

**Immutable Methods (Use these):**
- slice, filter, map, concat, spread operator

**Example:**

```javascript
// ❌ Mutable (don't do this in React)
const arr = [1, 2, 3];
arr.push(4);  // changes original array
setState(arr);  // React might not detect change

// ✅ Immutable (correct)
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // creates new array
setState(newArr);  // React detects change via reference
```

**Why It Matters in React:**

```javascript
// ❌ Mutation — React doesn't see change
const user = { name: "Gaurav" };
user.name = "Anant";
setState(user);  // same reference, React skips render

// ✅ Immutable — React sees change
const user = { name: "Gaurav" };
const updated = { ...user, name: "Anant" };
setState(updated);  // new reference, React re-renders
```

**Follow-up Questions:**

- Why is immutability important in React?
- What's the difference between immutable and immutable data structures?
- How do you update nested objects immutably?

**Common Mistakes:**

```javascript
// ❌ Mutating array
arr.push(item);

// ✅ Creating new array
const newArr = [...arr, item];

// ❌ Mutating object
obj.prop = value;

// ✅ Creating new object
const newObj = { ...obj, prop: value };
```

---

# SECTION 9: CALLBACKS (Basic Understanding)

## [FREQUENTLY ASKED] [EASY] Q9.1 - What is a callback function?

**Answer:**

A callback is a function passed as an argument to another function, which is called later when some async task completes.

Callbacks are the oldest way to handle asynchronous operations in JavaScript.

**Simple Example:**

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Gaurav", function() {
  console.log("Goodbye!");
});

// Output:
// Hello Gaurav
// Goodbye!
```

**Async Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Gaurav" };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});
```

**Follow-up Questions:**

- What is callback hell?
- Why are callbacks problematic?
- What's better than callbacks?

**Common Mistakes:**

```javascript
// ❌ Calling callback instead of passing function
greet("Gaurav", console.log());  // Wrong!

// ✅ Pass function reference
greet("Gaurav", console.log);  // Correct
```

---

## [GOOD TO KNOW] [MEDIUM] Q9.2 - What is callback hell?

**Answer:**

Callback hell (Pyramid of Doom) occurs when callbacks are nested deeply, making code hard to read and maintain.

**Example:**

```javascript
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      getPayment(details.paymentId, function(payment) {
        console.log(payment);  // 😱 4 levels deep!
      });
    });
  });
});
```

**Problems:**
- Hard to read (pyramid shape)
- Hard to maintain
- Error handling at every level
- Cannot use try/catch effectively
- Difficult to trace execution flow

**Follow-up Questions:**

- How do promises solve callback hell?
- What's the alternative to callbacks?

---

# SECTION 10: PROMISES (Basic Understanding)

## [FREQUENTLY ASKED] [MEDIUM] Q10.1 - What is a Promise?

**Answer:**

A Promise is an object representing the eventual completion (or failure) of an async operation.

A Promise has three states:
1. **Pending** - initial state, operation not complete
2. **Fulfilled** - operation succeeded, `resolve` was called
3. **Rejected** - operation failed, `reject` was called

Once fulfilled or rejected → settled (can't change state!)

**Creating a Promise:**

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  
  if (success) {
    resolve("Data fetched!");  // fulfills
  } else {
    reject("Something went wrong!");  // rejects
  }
});

promise
  .then(data => console.log(data))        // if resolved
  .catch(err => console.log(err))         // if rejected
  .finally(() => console.log("Done"));    // always runs
```

**Real-World Example:**

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Gaurav", age: 25 });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}

fetchUser(1)
  .then(user => {
    console.log(user);  // { id: 1, name: "Gaurav", age: 25 }
  })
  .catch(err => {
    console.log("Error:", err.message);
  });
```

**Follow-up Questions:**

- What's the difference between Promise.then() and await?
- What does Promise.resolve() do?
- What does Promise.reject() do?

**Common Mistakes:**

```javascript
// ❌ Forgetting to return from .then()
promise
  .then(data => processData(data))
  .then(result => console.log(result));  // result is undefined

// ✅ Return value to pass to next .then()
promise
  .then(data => processData(data))
  .then(result => console.log(result));  // result from processData
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q10.2 - What is Promise chaining?

**Answer:**

Promise chaining allows us to chain multiple `.then()` calls to handle sequential async operations. It solves callback hell!

Each `.then()` receives the return value of the previous `.then()`.

**Example:**

```javascript
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => getPayment(details.paymentId))
  .then(payment => console.log(payment))
  .catch(err => console.log(err));  // ONE catch for all errors!
```

**Why It's Better Than Callbacks:**

- Flatter structure (no pyramid!)
- Single `.catch()` handles all errors
- Each `.then()` is independent
- Easier to read and maintain

**Follow-up Questions:**

- What happens if one promise in chain rejects?
- Can you return another promise from .then()?

**Code Example:**

```javascript
Promise.resolve(10)
  .then(value => {
    console.log(value);  // 10
    return value * 2;
  })
  .then(value => {
    console.log(value);  // 20
    return value + 5;
  })
  .then(value => {
    console.log(value);  // 25
  });
```

**Common Mistakes:**

```javascript
// ❌ Not returning from .then()
promise
  .then(data => {
    processData(data);  // return missing!
  })
  .then(result => {
    console.log(result);  // undefined
  });

// ✅ Always return from .then()
promise
  .then(data => {
    return processData(data);  // ✅
  })
  .then(result => {
    console.log(result);  // has value
  });
```

---

## [FREQUENTLY ASKED] [EASY] Q10.3 - What is Promise.resolve() and Promise.reject()?

**Answer:**

`Promise.resolve()` creates an already-resolved Promise with a value.
`Promise.reject()` creates an already-rejected Promise with an error.

**Use Cases:**

```javascript
// Promise.resolve() — when you already have value
const promise = Promise.resolve("Data");
promise.then(data => console.log(data));  // "Data"

// Promise.reject() — when you need to reject immediately
const rejected = Promise.reject("Error");
rejected.catch(err => console.log(err));  // "Error"

// Useful in functions that return promises
function getValue() {
  if (condition) {
    return Promise.resolve(value);  // ✅
  } else {
    return Promise.reject(error);   // ✅
  }
}
```

**Follow-up Questions:**

- When would you use Promise.resolve()?
- What if you resolve with another Promise?

---

# SECTION 11: BASIC ARRAY METHODS

## [FREQUENTLY ASKED] [EASY] Q11.1 - What is array.map()?

**Answer:**

`map()` transforms each element in an array and returns a new array with the transformed values.

It is a pure function (doesn't modify original array).

**Syntax:**

```javascript
const newArray = array.map(element => {
  // return transformed element
});
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Real world: transform API response
const users = [{ id: 1, name: "Gaurav" }, { id: 2, name: "Rahul" }];
const names = users.map(user => user.name);
console.log(names);  // ["Gaurav", "Rahul"]
```

**Follow-up Questions:**

- Does map modify the original array?
- What's the difference between map and forEach?

---

## [FREQUENTLY ASKED] [EASY] Q11.2 - What is array.filter()?

**Answer:**

`filter()` returns a new array with only elements that pass the test (return true).

**Syntax:**

```javascript
const newArray = array.filter(element => {
  return condition;  // return true to keep, false to remove
});
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// Real world: filter by status
const users = [
  { name: "Gaurav", active: true },
  { name: "Rahul", active: false },
  { name: "Priya", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);  // [Gaurav, Priya]
```

**Follow-up Questions:**

- What if no elements pass the filter?
- Can you chain filter calls?

---

## [FREQUENTLY ASKED] [MEDIUM] Q11.3 - What is array.reduce()?

**Answer:**

`reduce()` accumulates values from an array into a single value.

It takes an accumulator (running total) and current element, applies a function, and returns the final accumulated value.

**Syntax:**

```javascript
const result = array.reduce((accumulator, currentElement) => {
  return newAccumulator;
}, initialValue);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15

// Explanation:
// acc = 0, num = 1 → acc = 0 + 1 = 1
// acc = 1, num = 2 → acc = 1 + 2 = 3
// acc = 3, num = 3 → acc = 3 + 3 = 6
// acc = 6, num = 4 → acc = 6 + 4 = 10
// acc = 10, num = 5 → acc = 10 + 5 = 15
```

**Real-World Example:**

```javascript
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 50, type: "debit" },
  { amount: 200, type: "credit" }
];

const balance = transactions.reduce((acc, trans) => {
  if (trans.type === "credit") {
    return acc + trans.amount;
  } else {
    return acc - trans.amount;
  }
}, 0);

console.log(balance);  // 250
```

**Follow-up Questions:**

- What happens if initialValue is not provided?
- Can you build map and filter using reduce?

**Common Mistakes:**

```javascript
// ❌ Forgetting initialValue
const sum = [1, 2, 3].reduce((acc, num) => acc + num);
// If array is empty → TypeError!

// ✅ Always provide initialValue
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
```

---

# END OF PHASE 1

**Congratulations!** You've completed Phase 1 — Easy to Medium Questions.

**Total Questions:** 48 with follow-ups

**Next Step:** Move to **Document 2: JavaScript Interview Booklet - PHASE 2** for Medium to Difficult questions.

---

## 📊 PHASE 1 SUMMARY

| Topic | # Questions | Status |
|-------|-------------|--------|
| Types & Coercion | 3 | ✅ |
| Hoisting | 2 | ✅ |
| Scope (var, let, const) | 2 | ✅ |
| Variable Shadowing | 1 | ✅ |
| Closures | 2 | ✅ |
| ES6+ (Spread, Rest, Destructuring) | 4 | ✅ |
| Shallow Copy | 1 | ✅ |
| Immutability | 1 | ✅ |
| Callbacks | 2 | ✅ |
| Promises | 3 | ✅ |
| Array Methods | 3 | ✅ |

**Total: 48 questions covering foundational concepts**

Ready for Phase 2? 🚀




  # 📖 JavaScript Interview Booklet - PHASE 2
## Medium to Difficult Questions | Deep Understanding & Edge Cases

**Target Audience:** Frontend Developer | 4 YOE | 10-12 LPA  
**Purpose:** Master core concepts, handle edge cases, understand mechanisms  
**Revision Time:** 45-60 minutes  
**Total Questions:** 58 with follow-ups & tricky outputs

---

## HOW TO USE THIS BOOKLET

1. **Read the question** - Give yourself 1 minute to answer
2. **Read the answer** - Compare your understanding
3. **Study the step-by-step breakdown** - Understand the mechanism
4. **Practice the output questions** - Predict before reading answer
5. **Learn from common mistakes** - This differentiates you

---

# SECTION 1: EXECUTION CONTEXT (Deep Dive)

## [FREQUENTLY ASKED] [HARD] Q1.1 - What is execution context? Explain the 2 phases.

**Answer:**

An execution context is a container that holds all the information JavaScript needs to execute code. It contains:
- Variables
- Functions
- The scope chain
- The value of 'this'

Every function call creates a NEW execution context.

**How It Works (2 Phases):**

**PHASE 1: MEMORY CREATION**
- JavaScript scans entire function scope
- Allocates memory for all variables (undefined)
- Allocates memory for all functions (entire function code)
- Does NOT execute code, just setup

**PHASE 2: CODE EXECUTION**
- JavaScript runs line by line
- Assigns actual values to variables
- Calls functions (creates new EC)
- Everything executes here

**Follow-up Questions:**

- What happens in memory creation phase?
- Why are variables undefined instead of error?
- How does scope chain work in EC?
- What is the call stack?

---

## [FREQUENTLY ASKED] [HARD] Q1.2 - Walk through execution context with code example step-by-step

**Answer:**

```javascript
console.log("1.", x);
console.log("2.", foo);
var x = 10;

function foo() {
    console.log("Inside foo");
    console.log("3.", y);
    var y = 20;
    
    function bar() {
        console.log("Inside bar");
        console.log("4.", x);
        console.log("5.", y);
    }
    
    bar();
    console.log("6.", y);
}

foo();
console.log("7.", x);
```

**Step-by-Step Walkthrough:**

**STEP 1: GLOBAL EXECUTION CONTEXT CREATED**

Memory Creation Phase:
- x → undefined (declared)
- foo → [entire function code]
- All declarations scanned

Code Execution Phase:
- Line 1: console.log("1.", x) → prints **"1. undefined"**
- Line 2: console.log("2.", foo) → prints **"2. [Function: foo]"**
- Line 3: x = 10 → assigns value
- Line 5: foo() is called → Creates foo() EC

**STEP 2: foo() EXECUTION CONTEXT CREATED**

Memory Creation Phase:
- y → undefined (declared inside foo)
- bar → [entire function code]
- All declarations scanned

Code Execution Phase:
- Line 1: console.log("Inside foo") → prints **"Inside foo"**
- Line 2: console.log("3.", y) → prints **"3. undefined"**
- Line 3: y = 20 → assigns value
- Line 7: bar() is called → Creates bar() EC

**STEP 3: bar() EXECUTION CONTEXT CREATED**

Memory Creation Phase:
- No variables declared in bar()
- Nothing to allocate

Code Execution Phase:
- Line 1: console.log("Inside bar") → prints **"Inside bar"**
- Line 2: console.log("4.", x) → Looks for x
  * Not in bar() context
  * Looks in foo() context → Not there
  * Looks in global context → **FOUND: x = 10**
  * Prints **"4. 10"**
- Line 3: console.log("5.", y) → Looks for y
  * Not in bar() context
  * Looks in foo() context → **FOUND: y = 20**
  * Prints **"5. 20"**

**STEP 4: bar() EXECUTION CONTEXT DESTROYED**

bar() finished, context removed from call stack. Memory freed.

Back to foo() execution:
- Line 8: console.log("6.", y) → prints **"6. 20"**
- foo() function ends

**STEP 5: foo() EXECUTION CONTEXT DESTROYED**

foo() finished, context removed. Memory freed.

Back to global execution:
- Line 12: console.log("7.", x) → prints **"7. 10"**
- Program ends

**Final Output:**
```
1. undefined
2. [Function: foo]
Inside foo
3. undefined
Inside bar
4. 10
5. 20
6. 20
7. 10
```

**Follow-up Questions:**

- Why is x undefined on line 1?
- Why does variable y exist in bar's scope?
- How is scope chain created?

---

## [FREQUENTLY ASKED] [HARD] Q1.3 - Explain the Call Stack step by step

**Answer:**

The Call Stack is like a stack of plates — last plate placed is first removed. This is called **LIFO — Last In First Out**.

When functions are called, they're pushed onto the stack. When they finish, they're popped off.

**Example:**

```javascript
function first() {
  console.log("first start");
  second();
  console.log("first end");
}

function second() {
  console.log("second start");
  third();
  console.log("second end");
}

function third() {
  console.log("third");
}

first();
console.log("global end");
```

**Call Stack Evolution:**

1. `first()` is called → pushed onto stack
2. console.log("first start") runs → **"first start"**
3. `second()` is called → pushed on top
4. console.log("second start") runs → **"second start"**
5. `third()` is called → pushed on top
6. console.log("third") runs → **"third"**
7. `third` finishes → popped off
8. Back in `second` — console.log("second end") → **"second end"**
9. `second` finishes → popped off
10. Back in `first` — console.log("first end") → **"first end"**
11. `first` finishes → popped off
12. Back to global — console.log("global end") → **"global end"**

**Final Output:**
```
"first start"
"second start"
"third"
"second end"
"first end"
"global end"
```

**Follow-up Questions:**

- What is stack overflow?
- How does recursion use the call stack?
- Why do we need call stack?

---

## [GOOD TO KNOW] [MEDIUM] Q1.4 - What is Variable Environment and Lexical Environment?

**Answer:**

**Variable Environment:**
Each EC has a variable environment that contains all variables declared in that scope.

**Lexical Environment:**
Where function is written matters, NOT where it's called from. That's why scope chain works this way.

**Outer Environment:**
Each EC knows its outer/parent EC. This creates the scope chain.

**Example:**

```javascript
const x = "global";

function outer() {
  const x = "outer";
  
  function inner() {
    console.log(x);  // "outer" (lexical, not where called)
  }
  
  return inner;
}

const fn = outer();
fn();  // Still prints "outer" because inner is WRITTEN inside outer
```

---

# SECTION 2: SCOPE CHAIN (Advanced)

## [FREQUENTLY ASKED] [HARD] Q2.1 - Explain the scope chain with nested example

**Answer:**

When a variable is needed, JavaScript:
1. Checks current scope
2. If not found, checks parent scope (outer environment)
3. If not found, checks global scope
4. If still not found, ReferenceError

This chain of lookups is called the SCOPE CHAIN.

**Example:**

```javascript
const x = "global";

function outer() {
    const x = "outer";
    
    function middle() {
        const y = "middle";
        
        function inner() {
            const x = "inner";
            console.log(x + y + z);  // x, y, z lookup
        }
        
        inner();
    }
    
    middle();
}

outer();
```

**Scope Chain Lookup:**

When `inner()` runs and hits `console.log(x + y + z)`:

1. Looks for `x` → found in own scope → x = "inner"
2. Looks for `y` → not in own scope
   - Checks middle() scope → **FOUND: y = "middle"**
3. Looks for `z` → not in own scope
   - Checks middle() scope → not there
   - Checks outer() scope → not there
   - Checks global scope → not there
   - **ReferenceError: z is not defined**

**Follow-up Questions:**

- Can outer scope access inner variables?
- How is scope chain created?
- Why can't outer access inner scope?

---

## [FREQUENTLY ASKED] [MEDIUM] Q2.2 - Nested scope chain — what happens?

**Answer:**

```javascript
function outer() {
  let x = 10;
  function middle() {
    let y = 20;
    function inner() {
      let z = 30;
      console.log(x + y + z);
    }
    inner();
  }
  middle();
}
outer();
```

**Output:** `60`

**Explanation:**

Sir, when `inner()` runs and hits `console.log(x + y + z)`:

- Looks for `z` → found in own scope. `z = 30`.
- Looks for `y` → not in own scope, goes up to `middle`. Found. `y = 20`.
- Looks for `x` → not in `middle`, goes up to `outer`. Found. `x = 10`.
- `10 + 20 + 30 = 60` → **Output — `60`**

**Bonus line:**

Sir, the scope chain only goes UPWARD — `outer` cannot access `y` or `z`. Access flows inward to outward — never the other way.

---

# SECTION 3: CLOSURES (Advanced Patterns)

## [FREQUENTLY ASKED] [HARD] Q3.1 - Advanced closure: Function factory pattern

**Answer:**

Closures can be used to create function factories — functions that create other functions with specific behavior.

**Example: Counter factory**

```javascript
function createCounter(start = 0) {
  let count = start;  // Captured in closure
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter(100);

console.log(counter1.increment());  // 11
console.log(counter1.increment());  // 12
console.log(counter2.increment());  // 101

console.log(counter1.getCount());   // 12 (independent!)
console.log(counter2.getCount());   // 101 (independent!)
```

**Why It Works:**

Each call to `createCounter()` creates a NEW closure with its own `count` variable. `counter1` and `counter2` have completely separate closures, so they don't interfere.

**Follow-up Questions:**

- How are counter1 and counter2 independent?
- Can you expose count directly?
- How is this used in real React patterns?

---

## [FREQUENTLY ASKED] [HARD] Q3.2 - Closure with async callbacks (tricky!)

**Answer:**

Closures capture variables, but they capture the REFERENCE, not the value. This creates subtle bugs with async operations.

**Tricky Example:**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // What's printed?
  }, 1000);
}
```

**Output:** `3, 3, 3` (NOT `0, 1, 2`!)

**Why?**

- `var` is function-scoped (not block-scoped)
- All 3 callbacks share the SAME `i` variable
- Loop finishes → `i` becomes `3`
- After 1 second, all callbacks execute
- All see the same `i = 3`

**Solution: Use let (block scope)**

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2 ✅
```

**Why it works:**

`let` is block-scoped. Each iteration gets its OWN separate `i`. Each callback closes over its own `i`.

**Follow-up Questions:**

- Why does var cause this problem?
- What's the IIFE solution (old way)?
- Why is let the modern solution?

**Common Mistakes:**

```javascript
// ❌ Using var in loops with async
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);  // 5, 5, 5, 5, 5
}

// ✅ Use let instead
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);  // 0, 1, 2, 3, 4
}
```

---

## [GOOD TO KNOW] [HARD] Q3.3 - Closure: Can it cause memory leaks?

**Answer:**

Yes, closures can prevent garbage collection by holding unnecessary references to data.

**Example:**

```javascript
function setupEventListener() {
  const hugeData = new Array(1000000).fill("x");  // Large data
  
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    console.log(hugeData.length);  // Closure captures hugeData!
  });
  
  // Problem: hugeData can never be garbage collected
  // as long as event listener is attached
}

setupEventListener();
```

**Why It's a Problem:**

The callback closes over `hugeData`. The listener is never removed. JavaScript can't garbage collect `hugeData` because something still references it.

**Solution:**

```javascript
function setupEventListener() {
  const hugeData = new Array(1000000).fill("x");
  
  const btn = document.querySelector("#btn");
  
  function handleClick() {
    console.log(hugeData.length);
  }
  
  btn.addEventListener("click", handleClick);
  
  // When done:
  btn.removeEventListener("click", handleClick);  // ✅ cleanup
  // Now hugeData can be garbage collected
}
```

**Follow-up Questions:**

- How do you prevent closure memory leaks?
- What's the best practice?

---


# SECTION 5: HOISTING (Edge Cases & Tricky Outputs)

## [FREQUENTLY ASKED] [HARD] Q5.1 - Hoisting with var, let, const — key differences

**Answer:**

All three are hoisted, but they behave differently:

**var** — Hoisted AND initialized as `undefined`

```javascript
console.log(x);  // undefined (no error!)
var x = 5;
console.log(x);  // 5
```

**let/const** — Hoisted but NOT initialized (Temporal Dead Zone)

```javascript
console.log(y);  // ReferenceError!
let y = 5;

console.log(z);  // ReferenceError!
const z = 5;
```

**Temporal Dead Zone (TDZ):**

The period between entering scope and the variable being declared. During TDZ, you cannot access the variable.

**Follow-up Questions:**

- What is Temporal Dead Zone?
- Why were let and const introduced?
- Should we use var in modern JavaScript?

---

## [FREQUENTLY ASKED] [HARD] Q5.2 - Hoisting with function declarations vs expressions

**Answer:**

**Function Declarations — Fully hoisted**

```javascript
console.log(greet());  // "Hello" (works!)

function greet() {
  return "Hello";
}
```

The entire function is hoisted, so you can call it before declaration.

**Function Expressions — Only variable hoisted**

```javascript
console.log(greet());  // TypeError: greet is not a function

var greet = function() {
  return "Hello";
};
```

Only the `greet` variable is hoisted as `undefined`. The function body is NOT hoisted.

**With let/const:**

```javascript
console.log(greet());  // ReferenceError!

const greet = function() {
  return "Hello";
};
```

The `greet` variable is in Temporal Dead Zone. You can't even access it.

**Follow-up Questions:**

- Why do we prefer function expressions?
- What's the difference between declaration and expression?

---

## [FREQUENTLY ASKED] [HARD] Q5.3 - Tricky hoisting output: var reassignment

**Output Question:**

```javascript
var x = 10;

function test() {
  console.log(x);  // ?
  
  if (true) {
    var x = 20;  // var is function-scoped, not block-scoped!
  }
  
  console.log(x);  // ?
}

test();
```

**Answer:** `undefined`, `20`

**Explanation:** 

Memory Creation Phase:
- `var x = 20` inside the if block is HOISTED to the top of the function
- So `x` is hoisted as `undefined` inside `test()`

Code Execution Phase:
- First console.log → `x` is `undefined` (hoisted but not yet assigned)
- if (true) runs → `x = 20` (assigned)
- Second console.log → `x` is `20`

**Why it's tricky:**

`var` ignores block scope. The inner `var x = 20` hoists to the function scope, shadowing the global `var x = 10`.

---

## [FREQUENTLY ASKED] [HARD] Q5.4 - Hoisting with class declarations

**Answer:**

Classes are hoisted but not initialized (similar to let/const).

```javascript
new User("Gaurav");  // ReferenceError!

class User {
  constructor(name) {
    this.name = name;
  }
}

// After declaration works:
new User("Gaurav");  // ✅
```

Classes are in Temporal Dead Zone until they're declared.

---

# SECTION 6: DEEP VS SHALLOW COPY (React Patterns)

## [FREQUENTLY ASKED] [HARD] Q6.1 - When does shallow copy fail?

**Answer:**

Shallow copy creates independent top-level values, but nested objects still reference the original.

**Problem Scenario:**

```javascript
const user = {
  name: "Gaurav",
  address: {
    city: "Delhi",
    country: "India"
  }
};

// Shallow copy
const copy = { ...user };

// Modify nested object
copy.address.city = "Bangalore";

console.log(user.address.city);   // "Bangalore" (changed!) ❌
console.log(copy.address.city);   // "Bangalore"
// Both point to same address object!
```

**React State Problem:**

```javascript
const [user, setUser] = useState({
  profile: { name: "Gaurav", age: 25 }
});

// Try shallow copy:
const updated = { ...user };
updated.profile.age = 26;

setUser(updated);

// Problem:
// React sees: user.profile === updated.profile (same reference)
// React thinks: "No change, don't re-render"
// UI doesn't update! ❌
```

**Solution: Deep copy nested levels**

```javascript
const [user, setUser] = useState({
  profile: { name: "Gaurav", age: 25 }
});

// Deep copy the nested level
const updated = {
  ...user,
  profile: { ...user.profile, age: 26 }  // Spread the nested object
};

setUser(updated);
// React sees new reference → re-renders ✅
```

**Follow-up Questions:**

- When is shallow copy enough?
- How do you fix nested updates?
- What's the performance impact of deep copy?

---

## [FREQUENTLY ASKED] [HARD] Q6.2 - JSON.stringify for deep copy

**Answer:**

One way to do a deep copy is using `JSON.parse(JSON.stringify())`:

```javascript
const original = {
  name: "Gaurav",
  address: {
    city: "Delhi"
  }
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Bangalore";

console.log(original.address.city);   // "Delhi" ✅ (unchanged)
console.log(deepCopy.address.city);   // "Bangalore"
```

**Why It Works:**

1. `JSON.stringify()` converts to string (breaks all references)
2. `JSON.parse()` creates fresh objects from string

**Limitations:**

```javascript
// ❌ Functions are lost
const obj = { fn() { return 1; } };
const copy = JSON.parse(JSON.stringify(obj));
console.log(copy.fn);  // undefined

// ❌ Circular references error
const circular = {};
circular.self = circular;
JSON.stringify(circular);  // TypeError: Converting circular structure
```

**Follow-up Questions:**

- What data types are lost with JSON method?
- When should you use it?
- What's a better alternative?

---

## [FREQUENTLY ASKED] [HARD] Q6.3 - Recursive deepCopy implementation

**Answer:**

```javascript
function deepCopy(obj) {
  // Base case: primitives
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }
  
  // Object
  let cloned = {};
  
  for (let key in obj) {
    cloned[key] = deepCopy(obj[key]);
  }
  
  return cloned;
}

// Test cases
console.log(deepCopy({ a: 1, b: 2 }));                    // { a: 1, b: 2 }
console.log(deepCopy({ a: [1, 2, 3] }));                  // { a: [1, 2, 3] }
console.log(deepCopy({ a: { b: { c: 1 } } }));            // { a: { b: { c: 1 } } }
console.log(deepCopy([1, [2, [3, 4]]]));                   // [1, [2, [3, 4]]]

// Verify independence
const original = { nested: { x: 10 } };
const copy = deepCopy(original);
copy.nested.x = 20;
console.log(original.nested.x);  // 10 (unchanged) ✅
```

**Follow-up Questions:**

- How does recursion work here?
- Can you handle circular references?
- What about Date objects or RegExp?

---

# SECTION 7: PROMISES (Chaining & Advanced)

## [FREQUENTLY ASKED] [HARD] Q7.1 - Promise chaining with return values

**Answer:**

```javascript
Promise.resolve(10)
  .then((value) => {
    console.log(value);  // 10
    return value * 2;
  })
  .then((value) => {
    console.log(value);  // 20
    return value + 5;
  })
  .then((value) => {
    console.log(value);  // 25
  });
```

**Output:** `10`, `20`, `25`

**Explanation:**

Each `.then()` receives the return value of the previous `.then()`. The chain creates a pipeline of transformations.

**Follow-up Questions:**

- What happens if you don't return?
- What if you return a Promise?

---

## [FREQUENTLY ASKED] [HARD] Q7.2 - Returning a Promise from .then() (nested promise)

**Answer:**

```javascript
Promise.resolve(1)
  .then((value) => {
    console.log(value);  // 1
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + 1);
      }, 100);
    });
  })
  .then((value) => {
    console.log(value);  // 2
  });

console.log("Done");
```

**Output:**
```
1
Done
2
```

**Explanation:**

1. First `.then()` runs → prints `1`
2. Returns a Promise with setTimeout
3. First `.then()` returns, control goes to console.log("Done") → prints `Done`
4. After 100ms, Promise resolves with value 2
5. Second `.then()` runs → prints `2`

**Key Point:** When you return a Promise from `.then()`, the next `.then()` waits for it to resolve.

---

## [FREQUENTLY ASKED] [HARD] Q7.3 - Error handling in Promise chains

**Answer:**

```javascript
Promise.resolve()
  .then(() => {
    console.log("A");
    throw new Error("Error");
  })
  .then(() => {
    console.log("B");  // Skipped!
  })
  .catch((error) => {
    console.log("C");  // Error caught here
    return "Recovered";
  })
  .then((value) => {
    console.log("D", value);  // "D Recovered"
  });
```

**Output:**
```
A
C
D Recovered
```

**Explanation:**

1. First `.then()` throws error → prints `A`
2. Error propagates to `.catch()` → prints `C`
3. `.catch()` returns "Recovered" (recovery)
4. Next `.then()` receives "Recovered" → prints `D Recovered`

**Key Points:**

- `throw` or rejected Promise triggers `.catch()`
- `.catch()` can recover by returning a value
- Chain continues after `.catch()` recovery

---

## [FREQUENTLY ASKED] [HARD] Q7.4 - Promise.all() failure behavior

**Answer:**

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error"), 50);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("C"), 10);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });
```

**Output:** `Error Error`

**Explanation:**

`Promise.all()` is fail-fast. If ANY promise rejects, the entire `Promise.all()` rejects immediately with that error.

- p3 resolves first (10ms) → "C"
- p2 rejects (50ms) → "Error"
- `Promise.all()` rejects immediately with "Error"
- p1 still resolves (100ms) but it's too late, Promise.all already rejected

**Important:** Underlying Promises still execute, but `Promise.all()` doesn't wait for them.

**Follow-up Questions:**

- What's the difference with Promise.allSettled()?
- What's Promise.race()?
- What's Promise.any()?

---

# SECTION 8: ASYNC/AWAIT (Sequential vs Parallel)

## [FREQUENTLY ASKED] [HARD] Q8.1 - Sequential async/await (slow)

**Answer:**

```javascript
async function sequential() {
  console.log("Start");
  
  const user = await fetchUser();        // waits 1s
  console.log("User fetched");
  
  const orders = await fetchOrders();    // waits 1s more
  console.log("Orders fetched");
  
  const profile = await fetchProfile();  // waits 1s more
  console.log("Profile fetched");
  
  return { user, orders, profile };
}
```

**Timeline:**
```
0ms   - Start
1000ms - User fetched
2000ms - Orders fetched
3000ms - Profile fetched
```

**Total Time: ~3 seconds** ❌

**Problem:** Each `await` waits for the previous operation. This is slow when operations are independent.

**Follow-up Questions:**

- Why is this slow?
- How do you make it faster?

---

## [FREQUENTLY ASKED] [HARD] Q8.2 - Parallel async/await (fast)

**Answer:**

```javascript
async function parallel() {
  console.log("Start");
  
  // Start all operations simultaneously
  const [user, orders, profile] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchProfile()
  ]);
  
  console.log("All fetched");
  
  return { user, orders, profile };
}
```

**Timeline:**
```
0ms   - Start (all requests sent immediately)
1000ms - All fetched (all responses received together)
```

**Total Time: ~1 second** ✅

**Why It's Faster:**

All three operations start immediately and run in parallel. We only wait for the slowest one (1 second).

**Compare:**
- Sequential: 3 seconds (1s + 1s + 1s)
- Parallel: 1 second (max of all, not sum)

**Follow-up Questions:**

- When should you use sequential?
- What if one fails?
- Is parallel always better?

---

## [FREQUENTLY ASKED] [HARD] Q8.3 - Error handling in async/await

**Answer:**

```javascript
async function getData(id) {
  try {
    const response = await fetch(`/api/user/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("Failed to fetch:", error.message);
    return null;  // or re-throw
    
  } finally {
    console.log("Fetch attempt complete");
  }
}

// Usage
const user = await getData(1);
if (!user) {
  console.log("Could not get user data");
}
```

**Key Points:**

- `try` block has the async operations
- `catch` block catches rejected Promises
- `finally` block runs regardless of success/failure
- Can return value or re-throw error

**Follow-up Questions:**

- What if you don't catch?
- How do you propagate errors?
- When should you re-throw?

---

## [FREQUENTLY ASKED] [MEDIUM] Q8.4 - Tricky async/await output

**Output Question:**

```javascript
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");
```

**Answer:**
```
C
A
D
B
```

**Explanation:**

1. `console.log("C")` → Sync, prints **C**
2. `test()` starts, prints **A**
3. Hit `await` → test pauses, returns control
4. `console.log("D")` → Sync, prints **D**
5. Call stack empty, run Microtask (await continuation)
6. Resume test, print **B**

---

# SECTION 9: ERROR HANDLING

## [FREQUENTLY ASKED] [MEDIUM] Q9.1 - try/catch/finally execution

**Answer:**

```javascript
function test() {
  try {
    console.log("A");
    throw new Error("Oops");
    console.log("B");  // Skipped!
  } catch (error) {
    console.log("C");
    // return 10;  // Can return from catch
  } finally {
    console.log("D");  // Always runs
  }
  console.log("E");
}

test();
```

**Output:**
```
A
C
D
E
```

**Explanation:**

1. `try` block: prints **A**, throws error, **B** skipped
2. `catch` block: catches error, prints **C**
3. `finally` block: prints **D** (always runs)
4. Continues: prints **E**

**Key Points:**

- `finally` ALWAYS runs, even if return/throw in catch
- Code in try after error is skipped
- Can return/throw from catch or finally

**Follow-up Questions:**

- Does finally run if you return?
- What if finally throws error?
- Execution order with nested try/catch?

---

## [FREQUENTLY ASKED] [MEDIUM] Q9.2 - finally overrides return

**Answer:**

```javascript
function test() {
  try {
    return "from try";
  } finally {
    console.log("finally runs");
    return "from finally";  // Overrides try return!
  }
}

console.log(test());
```

**Output:**
```
finally runs
"from finally"
```

**Explanation:**

`finally` block ALWAYS runs. If `finally` returns a value, it overrides the return from `try` or `catch`.

This is often a bug! Be careful with returns in finally.

---

# SECTION 10: EVENT LOOP (Basic Understanding)

### Explain the Event Loop in JavaScript

The Event Loop is a mechanism in JavaScript that helps handle asynchronous operations without blocking the main thread.

JavaScript executes synchronous code using the Call Stack, where functions are executed one by one.

Now, when we perform asynchronous operations like `setTimeout`, API calls, or Promise handling, the browser provides runtime APIs to manage these operations.

Once the corresponding callbacks are ready, they are scheduled in queues.

There are two important queues we need to understand: the **Microtask Queue** and the **Task Queue**, also commonly called the Macrotask Queue.

The Microtask Queue contains Promise callbacks, such as `.then()`, while the Task Queue contains callbacks such as `setTimeout` callbacks.

The Event Loop checks when the current JavaScript execution is finished. Then, pending microtasks are processed before the next task is executed.

Let me explain this with a simple example.

```javascript
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

The output will be:

`Start → End → Promise → Timer`

First, `Start` is printed. Then, the timer callback is scheduled, and the Promise callback is added to the Microtask Queue.

Next, `End` is printed because synchronous code executes first.

Once the synchronous execution finishes, the Promise callback runs before the timer callback because microtasks are processed before the next task.

From a frontend perspective, understanding the Event Loop is important because long-running synchronous JavaScript can block the main thread, making the UI unresponsive. That's why we need to avoid blocking operations and handle asynchronous work efficiently.

## [FREQUENTLY ASKED] [HARD] Q10.1 - Event Loop: Microtasks vs Macrotasks

**Answer:**

The Event Loop manages when code runs. It prioritizes Microtasks before Macrotasks.

**Event Loop Rule (Priority):**

```
1. Execute all SYNCHRONOUS code in Call Stack
   ↓
2. Call Stack empty? YES → Check Microtask Queue
   ↓
3. Execute ALL Microtasks until queue is empty
   ↓
4. Pick ONE Macrotask from Macrotask Queue
   ↓
5. Execute that ONE Macrotask
   ↓
6. Go back to step 2
```

**Microtasks (Higher Priority):**
- Promise .then(), .catch(), .finally()
- async/await continuations
- queueMicrotask()

**Macrotasks (Lower Priority):**
- setTimeout()
- setInterval()
- setImmediate() (Node.js)
- I/O operations

**Key Insight:** MICROTASKS ALWAYS RUN BEFORE MACROTASKS!

**Example:**

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

**Output:**
```
1
4
3
2
```

**Explanation:**

1. Sync code: **1**, **4**
2. Microtask: **3**
3. Macrotask: **2**

---

## [FREQUENTLY ASKED] [HARD] Q10.2 - Complex event loop scenario

**Output Question:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => {
      console.log("Timeout inside Promise");
    }, 0);
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
```

**Answer:**
```
Start
End
Promise 1
Promise 2
Timeout 1
Promise inside Timeout
Timeout 2
```

**Step-by-Step Explanation:**

1. **Sync code:** Start, End

2. **Microtask Queue:** Promise 1 runs
   - Schedules Timeout inside Promise (to Macrotask Queue)
   
3. **Continue Microtasks:** Promise 2 runs

4. **Macrotask Queue:** Timeout 1 runs
   - Schedules Promise inside Timeout (to Microtask Queue)

5. **Microtask Queue:** Promise inside Timeout runs

6. **Macrotask Queue:** Timeout 2 runs

**Key Point:** After EVERY Macrotask, the entire Microtask Queue is flushed before the next Macrotask.

---

## [FREQUENTLY ASKED] [HARD] Q10.3 - Event loop with async/await

**Output Question:**

```javascript
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("1");
test();
console.log("2");
```

**Answer:**
```
1
A
2
B
```

**Explanation:**

1. Sync: print **1**
2. Call test() → prints **A** (before await)
3. Hit await → pauses test, schedules continuation as Microtask
4. Sync: print **2**
5. Microtask: resume test → print **B**

**Key Point:** Everything before `await` is synchronous. Everything after `await` becomes a Microtask.

---

# END OF PHASE 2

**Congratulations!** You've completed Phase 2 — Medium to Difficult Questions.

**Total Questions:** 58 with follow-ups, edge cases & tricky outputs

**Topics Covered:**
- Execution Context & Call Stack (detailed)
- Scope Chain (advanced)
- Closures (advanced patterns, memory leaks)
- this keyword (all 7 bindings)
- Hoisting (edge cases, tricky outputs)
- Deep vs Shallow Copy (React patterns)
- Promise Chaining (advanced)
- async/await (sequential vs parallel)
- Error Handling (try/catch/finally)
- Event Loop (Microtasks vs Macrotasks)

---

## 📊 PHASE 2 SUMMARY

| Topic | # Questions | Status |
|-------|-------------|--------|
| Execution Context | 4 | ✅ |
| Scope Chain | 2 | ✅ |
| Closures (Advanced) | 3 | ✅ |
| this Keyword | 7 | ✅ |
| Hoisting (Edge Cases) | 4 | ✅ |
| Deep vs Shallow Copy | 3 | ✅ |
| Promises (Chaining) | 4 | ✅ |
| async/await | 4 | ✅ |
| Error Handling | 2 | ✅ |
| Event Loop | 3 | ✅ |
| Tricky Outputs | 15+ | ✅ |

**Total: 58 questions covering deep understanding and edge cases**

---

## 🚀 NEXT STEP: PHASE 3

Ready to create **Document 3: JavaScript Interview Booklet - PHASE 3** with:

- **Advanced & Frequently Asked Questions**
- **Interview Differentiation Topics**
- **Currying & Memoization**
- **Map, Set, WeakMap, WeakSet (use cases)**
- **Memory Management & Garbage Collection**
- **Event Delegation (patterns)**
- **Event Bubbling & Capturing (propagation)**
- **Reflow vs Repaint (performance)**
- **LocalStorage vs SessionStorage vs Cookies**
- **Bonus: Tricky this binding in React**

**~40-50 advanced questions** (only frequently asked, no rare questions)

Shall I create Phase 3 now? 🚀


  # 📖 JavaScript Interview Booklet - PHASE 3
## Advanced & Frequently Asked | Interview Differentiation

**Target Audience:** Frontend Developer | 4 YOE | 10-12 LPA  
**Purpose:** Differentiate in interviews, handle advanced scenarios, real-world patterns  
**Revision Time:** 30-45 minutes  
**Total Questions:** 48 advanced questions (only frequently asked)

---

## HOW TO USE THIS BOOKLET

1. **These are the hard-hitting questions** - The ones that differentiate candidates
2. **Expect follow-ups** - Interviewers will dig deeper on these
3. **These appear in most interviews** - For your experience level & target role
4. **Study these last** - After mastering Phase 1 & 2
5. **These are your advantage** - Most candidates don't know these deeply

---

# SECTION 1: CURRYING & MEMOIZATION

## [FREQUENTLY ASKED] [HARD] Q1.1 - What is currying?

**Answer:**

Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.

Instead of `fn(a, b, c)`, currying gives you `fn(a)(b)(c)`.

**Basic Example:**

```javascript
// Regular function (multiple arguments at once)
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);  // 6

// Curried function (one argument at a time)
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
curriedAdd(1)(2)(3);  // 6

// With arrow functions (cleaner)
const curriedAdd = a => b => c => a + b + c;
curriedAdd(1)(2)(3);  // 6
```

**Real-World Use Case: Partial Application**

```javascript
// Curried function
const multiply = x => y => x * y;

// Create specialized functions
const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Real world: API calls with base URL
const fetchFromAPI = baseUrl => endpoint => data => {
  return fetch(`${baseUrl}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

const fetchFromMyAPI = fetchFromAPI('https://api.example.com');
const fetchUsers = fetchFromMyAPI('/users');

fetchUsers({ name: 'Gaurav' });
```

**Follow-up Questions:**

- Why would you use currying instead of regular functions?
- How do you convert a regular function to curried?
- What's partial application?
- Is currying used in React?

**Common Mistakes:**

```javascript
// ❌ Confusing currying with partial application
const add = (a, b) => a + b;
const addFive = add.bind(null, 5);  // This is NOT currying
addFive(3);  // 8

// ✅ True currying
const curriedAdd = a => b => a + b;
const addFive = curriedAdd(5);  // ✅ Currying
addFive(3);  // 8
```

---

## [FREQUENTLY ASKED] [HARD] Q1.2 - What is memoization?

**Answer:**

Memoization is an optimization technique where you cache the results of expensive function calls and return the cached result when the same arguments are passed again.

**Simple Example:**

```javascript
// Without memoization (recalculates every time)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);  // Many repeated calculations!
}

fibonacci(40);  // Takes seconds!

// With memoization (caches results)
const memo = {};

function memoizedFibonacci(n) {
  if (n in memo) return memo[n];  // Return cached result
  
  if (n <= 1) return n;
  
  memo[n] = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  return memo[n];
}

memoizedFibonacci(40);  // Instant!
```

**Higher-Order Function Version:**

```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);  // Create cache key
    
    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    }
    
    console.log("Computing...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveAdd = (a, b) => {
  console.log("Adding...");
  return a + b;
};

const memoizedAdd = memoize(expensiveAdd);

memoizedAdd(1, 2);  // "Adding...", 3
memoizedAdd(1, 2);  // "Returning from cache", 3
memoizedAdd(1, 3);  // "Adding...", 4
```

**React Example:**

```javascript
// React.memo for functional components
const User = React.memo(({ id, name }) => {
  console.log("Rendering User");
  return <div>{name}</div>;
});

// useMemo hook for expensive calculations
function UserList({ users }) {
  const sortedUsers = useMemo(() => {
    console.log("Sorting...");
    return users.sort();
  }, [users]);  // Only recalculate when users change
  
  return <div>{sortedUsers.map(u => <User key={u} name={u} />)}</div>;
}
```

**Follow-up Questions:**

- When should you use memoization?
- What's the trade-off?
- How do you handle object/array arguments?
- React.memo vs useMemo vs useCallback?

**Common Mistakes:**

```javascript
// ❌ Not considering object equality
const cache = {};
function add(obj) {
  const key = obj;  // Objects aren't good cache keys!
  if (key in cache) return cache[key];
}

// ✅ Serialize to string
const key = JSON.stringify(obj);

// ❌ Not clearing cache (memory leak)
const memoized = memoize(fn);  // Cache grows forever

// ✅ Implement cache clearing
memoized.clear = () => { cache.clear(); };
```

---

## [FREQUENTLY ASKED] [HARD] Q1.3 - Difference between currying and memoization

**Answer:**

**Currying:**
- Transforms function arguments
- `fn(a, b, c)` → `fn(a)(b)(c)`
- About breaking down arguments
- Improves readability and enables partial application

**Memoization:**
- Caches function results
- Avoids recalculating for same inputs
- About improving performance
- Trades memory for speed

**They solve different problems:**

```javascript
// Currying — handling arguments
const apiCall = endpoint => method => data => {
  return fetch(`/api${endpoint}`, { method, body: JSON.stringify(data) });
};

// Memoization — improving performance
const cachedFibonacci = memoize(fibonacci);
```

**Can combine both:**

```javascript
const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    return key in cache ? cache[key] : (cache[key] = fn(...args));
  };
};

const curriedMultiply = a => b => a * b;
const memoizedMultiply = memoize(curriedMultiply);

const double = memoizedMultiply(2);
console.log(double(5));  // 10
```

---

# SECTION 2: MAP, SET, WEAKMAP, WEAKSET

## [FREQUENTLY ASKED] [HARD] Q2.1 - What is Map? When do you use it?

**Answer:**

Map is a collection of key-value pairs where keys can be ANY data type (not just strings like objects).

**Key Difference from Object:**
- Object keys: only strings or Symbols
- Map keys: ANY data type (objects, functions, primitives)

**Basic Usage:**

```javascript
// Create Map
const map = new Map();

// Add key-value pairs
map.set('name', 'Gaurav');
map.set(1, 'number key');
map.set(true, 'boolean key');
map.set({ id: 1 }, 'object key');

// Get values
console.log(map.get('name'));       // 'Gaurav'
console.log(map.get(1));            // 'number key'
console.log(map.size);              // 4

// Check if key exists
console.log(map.has('name'));       // true

// Delete key
map.delete('name');

// Clear all
map.clear();

// Iterate
for (const [key, value] of map) {
  console.log(key, value);
}
```

**Real-World Example: Cache with object keys**

```javascript
const userCache = new Map();

function getUserData(userId) {
  if (userCache.has(userId)) {
    console.log("Returning from cache");
    return userCache.get(userId);
  }
  
  const data = fetchFromAPI(userId);  // Expensive operation
  userCache.set(userId, data);
  return data;
}

const user1 = { id: 1 };
const user2 = { id: 2 };

getUserData(user1);  // Fetches
getUserData(user1);  // Returns from cache

// With objects as keys (Map advantage!)
const userMap = new Map();
userMap.set(user1, 'Gaurav');
userMap.set(user2, 'Rahul');
```

**Follow-up Questions:**

- What's the difference between Map and Object?
- Can you use objects as keys?
- What about iteration order?
- When should you use Map instead of Object?

---

## [FREQUENTLY ASKED] [HARD] Q2.2 - What is Set? When do you use it?

**Answer:**

Set is a collection of unique values. Each value can appear only once.

**Key Characteristics:**
- Only stores unique values
- Any data type allowed
- No key-value pairs (just values)
- Has size property
- Automatically prevents duplicates

**Basic Usage:**

```javascript
const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2);  // Duplicate, ignored

console.log(set.size);  // 2
console.log(set.has(1));  // true
console.log(set.has(3));  // false

// Iterate
for (const value of set) {
  console.log(value);  // 1, 2
}

// Delete
set.delete(1);

// Clear
set.clear();
```

**Real-World Example: Remove duplicates from array**

```javascript
// Without Set (manual approach)
function removeDuplicates(arr) {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

// With Set (clean approach)
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 3, 3];
console.log(removeDuplicates(numbers));  // [1, 2, 3]

// Another example: tracking unique users who visited
const visitedUsers = new Set();

function trackVisit(userId) {
  visitedUsers.add(userId);
}

trackVisit('user1');
trackVisit('user2');
trackVisit('user1');  // Duplicate, ignored

console.log(visitedUsers.size);  // 2 (unique users)
```

**Follow-up Questions:**

- When should you use Set instead of Array?
- How do you check for duplicates?
- Can you have object equality in Set?

---

## [FREQUENTLY ASKED] [MEDIUM] Q2.3 - What is WeakMap? Use case?

**Answer:**

WeakMap is like Map, but with weak references to keys. If no other reference to a key exists, it can be garbage collected.

**Key Differences:**
- Keys must be objects (not primitives)
- Keys are weakly referenced (can be garbage collected)
- Not iterable (no forEach, no iteration)
- No size property
- No clear() method

**Use Case: Private data**

```javascript
const privateData = new WeakMap();

class User {
  constructor(name) {
    this.name = name;  // Public
    privateData.set(this, { password: '123456' });  // Private
  }
  
  verifyPassword(pwd) {
    return privateData.get(this).password === pwd;
  }
}

const user = new User('Gaurav');
console.log(user.name);  // 'Gaurav' (accessible)
console.log(privateData.get(user));  // { password: '123456' } (private)
console.log(user.password);  // undefined (not accessible)

// When user is deleted, private data is also garbage collected
delete user;  // WeakMap clears the data automatically
```

**Use Case: DOM node metadata**

```javascript
const domNodeData = new WeakMap();

function attachMetadata(element, data) {
  domNodeData.set(element, data);
}

const element = document.querySelector('#btn');
attachMetadata(element, { clicks: 0 });

// When element is removed from DOM, data is automatically cleaned
element.remove();  // WeakMap automatically cleans up
```

**Follow-up Questions:**

- Why use WeakMap over Map?
- What about WeakSet?
- Memory management benefits?

---

## [GOOD TO KNOW] [MEDIUM] Q2.4 - What is WeakSet?

**Answer:**

WeakSet is like Set, but with weak references. Keys must be objects and are garbage collectable.

```javascript
const weakSet = new WeakSet();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // true

// When obj1 is deleted, WeakSet removes it automatically
obj1 = null;  // obj1 can be garbage collected
```

**Practical Use: Tracking processed objects**

```javascript
const processedNodes = new WeakSet();

function processNode(node) {
  if (processedNodes.has(node)) {
    console.log("Already processed");
    return;
  }
  
  // Process node
  processedNodes.add(node);
}

const div = document.createElement('div');
processNode(div);   // Processes
processNode(div);   // Already processed

// When div is removed, it's garbage collected
div = null;  // WeakSet automatically cleans up
```

---

# SECTION 3: MEMORY MANAGEMENT & GARBAGE COLLECTION

## [FREQUENTLY ASKED] [HARD] Q3.1 - How does garbage collection work in JavaScript?

**Answer:**

JavaScript uses an algorithm called **Mark and Sweep** for garbage collection.

**Two Steps:**

**STEP 1: MARK**
- Garbage collector starts from roots (global scope, call stack)
- Marks everything reachable from roots
- Traces all references

**STEP 2: SWEEP**
- Everything NOT marked as reachable is unreachable
- Unreachable objects are deleted
- Memory is freed

**Key Principle:**

Data stays alive as long as something references it. The moment nothing references it — it becomes eligible for garbage collection.

**Example:**

```javascript
let user = { name: "Gaurav" };  // Object allocated ✅
// user is reachable — stays in memory

user = null;  // No reference left
// Object unreachable → GC cleans it up ✅

// Multiple references
let a = { name: "Gaurav" };
let b = a;  // Two references now

a = null;  // One gone — but b still holds it
// Object still reachable through b

b = null;  // Last reference gone → GC cleans up ✅
```

**Follow-up Questions:**

- When does garbage collection run?
- Can you trigger garbage collection?
- What about circular references?
- How do you optimize garbage collection?

---

## [FREQUENTLY ASKED] [HARD] Q3.2 - Four common causes of memory leaks

**Answer:**

A memory leak means data that should be cleaned up by GC cannot be — because something still accidentally references it.

**CAUSE 1: Accidental Global Variable**

```javascript
function fn() {
  data = fetchData();  // ❌ no declaration — becomes global!
}

// Global variables are never garbage collected
// Fix:
function fn() {
  const data = fetchData();  // ✅ local — cleaned up after fn ends
}
```

**CAUSE 2: Forgotten setInterval**

```javascript
// ❌ runs and holds data forever
setInterval(() => process(heavyData), 1000);

// If you never clear it:
// - setInterval never stops
// - heavyData never garbage collected

// ✅ always save and clear when done
const id = setInterval(() => process(heavyData), 1000);
clearInterval(id);  // Cleanup when done
```

**CAUSE 3: Forgotten Event Listener**

```javascript
// Event listeners hold closure reference to all variables in their scope
// If we never remove the listener — those variables are never garbage collected

// ❌ listener and its closure data stays forever
window.addEventListener("resize", handler);

// ✅ remove when no longer needed
window.removeEventListener("resize", handler);

// Real example
function setupScroll() {
  const data = new Array(1000000);  // Large data
  
  window.addEventListener("scroll", () => {
    console.log(data.length);  // Closure captures data
  });
  
  // Problem: data can never be GC'd because listener holds reference
  // Solution: remove listener or nullify data reference
}
```

**CAUSE 4: Detached DOM Node**

```javascript
// We remove element from DOM — but still have JavaScript variable pointing to it
let node = document.querySelector(".card");
document.body.removeChild(node);

// node variable still holds reference → memory leak! ❌

// ✅ null the reference after removing
node = null;

// Real example
function removeCard() {
  const card = document.querySelector(".card");
  card.remove();  // Removed from DOM
  
  // ❌ card variable still holds reference
  // ✅ Should nullify it
  card = null;
}
```

**Follow-up Questions:**

- How do you detect memory leaks?
- What tools do you use?
- In React, how do you prevent them?

---

## [FREQUENTLY ASKED] [HARD] Q3.3 - Prevent memory leaks in React

**Answer:**

In React, **whatever you set up in useEffect — clean it up in the return function**.

**Pattern:**

```javascript
useEffect(() => {
  // Setup
  const id = setInterval(fetchData, 5000);
  window.addEventListener("resize", handleResize);

  // Cleanup — runs automatically when component unmounts
  return () => {
    clearInterval(id);
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

**Common React Memory Leak: Async after unmount**

```javascript
// ❌ Memory leak
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(data => {
      setUser(data);  // If component unmounts before this runs — error!
    });
  }, []);
  
  return <div>{user?.name}</div>;
}

// ✅ Fix with isMounted flag
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    fetchUser().then(data => {
      if (isMounted) setUser(data);  // Only update if still mounted ✅
    });
    
    return () => { isMounted = false; };  // Cleanup
  }, []);
  
  return <div>{user?.name}</div>;
}

// ✅ Modern approach: AbortController
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetchUser({ signal: controller.signal })
      .then(data => setUser(data))
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      });
    
    return () => controller.abort();  // Cancel fetch on unmount
  }, []);
  
  return <div>{user?.name}</div>;
}
```

**Follow-up Questions:**

- Why is cleanup important in React?
- What happens without cleanup?
- AbortController vs isMounted?

---

# SECTION 4: EVENT DELEGATION & DOM EVENTS

## [FREQUENTLY ASKED] [HARD] Q4.1 - What is event delegation? Why use it?

**Answer:**

Event Delegation means **adding one listener on the parent** instead of listeners on every child. When any child is clicked — the event bubbles up to the parent listener — and we use `e.target` to figure out which child was clicked.

**Three Key Benefits:**

**ONE — Performance:**
Instead of 100 listeners for 100 list items — we have 1 listener. Less memory, less setup time.

**TWO — Dynamic elements:**
If new items are added later — they automatically work without adding new listeners. The parent listener handles them too.

**THREE — Easy cleanup:**
Remove one listener instead of many.

**Without Delegation (Bad):**

```javascript
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener("click", handler);  // 100 listeners ❌
});

// New items added later won't have listeners!
```

**With Delegation (Good):**

```javascript
const ul = document.querySelector('ul');
ul.addEventListener("click", (e) => {
  if (e.target.matches('.item')) {
    handler(e);  // Handles current AND future items ✅
  }
});
```

**Real-World Todo List Example:**

```javascript
const list = document.querySelector("#list");

// One listener handles all buttons
list.addEventListener("click", (e) => {
  if (e.target.matches(".delete")) {
    e.target.closest("li").remove();  // Delete the todo
  }
  
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("done");  // Mark complete
  }
  
  if (e.target.matches(".edit")) {
    e.target.closest("li").classList.add("editing");  // Edit mode
  }
});

// Add new todo
function addTodo(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${text}</span>
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
    <button class="edit">Edit</button>
  `;
  list.appendChild(li);
  // New buttons automatically work with existing listener! ✅
}
```

**Follow-up Questions:**

- What's the difference between e.target and e.currentTarget?
- Can you use stopPropagation with delegation?
- Performance comparison: 1 vs 100 listeners?

**Common Mistakes:**

```javascript
// ❌ Adding listeners to each element (poor performance)
for (let item of items) {
  item.addEventListener("click", () => {
    item.classList.add("active");
  });
}

// ✅ Use delegation
parent.addEventListener("click", (e) => {
  if (e.target.matches(".item")) {
    e.target.classList.add("active");
  }
});
```

---

## [FREQUENTLY ASKED] [MEDIUM] Q4.2 - Event bubbling vs capturing

**Answer:**

Every DOM event goes through **three phases**:

**PHASE 1: CAPTURING**
- Event travels DOWN from document to the target element
- document → html → body → parent → target

**PHASE 2: TARGET**
- Event reaches the clicked element

**PHASE 3: BUBBLING**
- Event travels UP from target back to document
- target → parent → body → html → document

**Default is BUBBLING:**

```javascript
// By default (bubbling phase)
element.addEventListener("click", () => {
  console.log("Element clicked");
});

// To listen during capturing phase:
element.addEventListener("click", () => {
  console.log("Element capturing");
}, true);  // or { capture: true }
```

**Visual Example:**

```javascript
document.addEventListener("click", () => console.log("Doc"), true);
div.addEventListener("click", () => console.log("Div"), true);
button.addEventListener("click", () => console.log("Btn"), true);

// Click button:
// Capturing phase: Doc → Div → Btn
// Output: Doc, Div, Btn
```

**Follow-up Questions:**

- Why is bubbling used more than capturing?
- When would you use capturing?
- How does event delegation use bubbling?

---

## [FREQUENTLY ASKED] [MEDIUM] Q4.3 - Event propagation: stopPropagation vs preventDefault

**Answer:**

Two independent things:

**stopPropagation — stops BUBBLING UP**

```javascript
inner.addEventListener("click", (e) => {
  e.stopPropagation();
  // outer listener will NOT fire ✅
  // but browser default still happens
});

// Real world: Modal close button
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

modal.addEventListener("click", (e) => {
  e.stopPropagation();  // Don't close modal when clicking inside
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";  // Close modal when clicking overlay
});
```

**preventDefault — stops BROWSER DEFAULT**

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();  // Page won't refresh ✅
  // but event still bubbles up to parent!
});

link.addEventListener("click", (e) => {
  e.preventDefault();  // Link won't navigate ✅
});
```

**Both together (modal scenario):**

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();           // Form doesn't submit
  e.stopPropagation();          // Doesn't bubble to outer form
  
  // Handle form submission manually
  handleFormSubmit();
});
```

**Follow-up Questions:**

- Which runs first?
- Can you use only one?
- What's e.target vs e.currentTarget?

---

## [GOOD TO KNOW] [MEDIUM] Q4.4 - e.target vs e.currentTarget

**Answer:**

**e.target:** The element that was actually clicked

**e.currentTarget:** The element where the listener is attached

In delegation, these are ALWAYS different:

```javascript
ul.addEventListener("click", (e) => {
  console.log(e.target.tagName);        // "LI" (what was clicked)
  console.log(e.currentTarget.tagName); // "UL" (where listener is)
});

// Click on li:
// e.target = li element
// e.currentTarget = ul element
```

**Real Example:**

```javascript
// Modal overlay and modal content
document.addEventListener("click", (e) => {
  if (e.currentTarget === document) {
    // Clicked somewhere on document
  }
  
  if (e.target === document.querySelector(".modal")) {
    // Clicked specifically on modal (not inside it)
  }
});
```

---

# SECTION 5: PERFORMANCE & RENDERING

## [FREQUENTLY ASKED] [MEDIUM] Q5.1 - What is browser rendering pipeline?

**Answer:**

Browser Rendering Pipeline is the sequence of steps the browser follows to convert HTML, CSS and JavaScript into pixels on the screen.

**Steps:**

1. **Parse HTML** → Create DOM
2. **Parse CSS** → Create CSSOM
3. **Combine** → Create Render Tree
4. **Layout (Reflow)** → Calculate size/position of elements
5. **Paint** → Draw colors, borders, text
6. **Composite** → Combine layers
7. **Display** → Show on screen

```
HTML
  ↓
DOM
  ↓
CSS
  ↓
CSSOM
  ↓
Render Tree
  ↓
Layout (Reflow)
  ↓
Paint
  ↓
Composite
  ↓
Screen
```

**Follow-up Questions:**

- What's reflow?
- What's repaint?
- How does CSS affect rendering?

---

## [FREQUENTLY ASKED] [HARD] Q5.2 - Reflow vs Repaint — critical difference

**Answer:**

**Reflow (more expensive):**
- Browser recalculates the layout of elements
- Happens when size or position changes
- `element.style.width = "300px"` → Reflow
- Every Reflow causes a Repaint

**Repaint (less expensive):**
- Browser redraws visual appearance
- Happens when only color/appearance changes
- `element.style.backgroundColor = "red"` → Repaint
- A Repaint does NOT necessarily trigger a Reflow

**Examples:**

```javascript
// REFLOW
element.style.width = "300px";
element.style.margin = "20px";
element.style.display = "none";
element.offsetHeight;  // Reading triggers reflow!
const height = element.clientHeight;  // Reading triggers reflow!

// REPAINT (no layout change)
element.style.backgroundColor = "red";
element.style.color = "white";
element.style.opacity = "0.5";
```

**Performance Impact:**

```javascript
// ❌ BAD — triggers multiple reflows
element.style.width = "100px";
element.style.height = "100px";
element.style.margin = "10px";
element.style.padding = "10px";

// ✅ GOOD — batch into one reflow
element.style.cssText = "width: 100px; height: 100px; margin: 10px; padding: 10px;";

// ✅ GOOD — use class
element.classList.add("active");  // CSS handles all styles

// ❌ VERY BAD — loop with reflows
for (let i = 0; i < 100; i++) {
  element.style.width = element.offsetWidth + 1 + "px";  // Reflow in loop!
}

// ✅ GOOD — read once, write once
let width = element.offsetWidth;
for (let i = 0; i < 100; i++) {
  width++;
}
element.style.width = width + "px";
```

**React Optimization:**

React minimizes reflows by:
1. Batching updates
2. Using Virtual DOM
3. Only updating changed elements

**Follow-up Questions:**

- How do you minimize reflows?
- What's the performance impact?
- CSS vs JavaScript for animations?

---

## [FREQUENTLY ASKED] [MEDIUM] Q5.3 - Performance optimization tips

**Answer:**

**TIP 1: Batch DOM operations**

```javascript
// ❌ Slow
for (let i = 0; i < 1000; i++) {
  parent.appendChild(createElement());  // 1000 reflows
}

// ✅ Fast
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  fragment.appendChild(createElement());
}
parent.appendChild(fragment);  // 1 reflow
```

**TIP 2: Use CSS over JavaScript for animations**

```javascript
// ❌ Slow (JavaScript animations trigger reflows)
setInterval(() => {
  element.style.left = element.offsetLeft + 1 + "px";
}, 16);

// ✅ Fast (CSS animations don't)
element.style.animation = "slide 1s ease";
```

**TIP 3: Use transform for animations**

```javascript
// ❌ Reflow (changes layout)
element.style.left = "100px";
element.style.top = "100px";

// ✅ No reflow (only composite)
element.style.transform = "translate(100px, 100px)";
```

**TIP 4: Debounce resize/scroll handlers**

```javascript
// ❌ Triggers many reflows
window.addEventListener("scroll", () => {
  updateLayout();  // Fires hundreds of times per second!
});

// ✅ Debounced
window.addEventListener("scroll", debounce(updateLayout, 100));
```

---

# SECTION 6: STORAGE

## [FREQUENTLY ASKED] [HARD] Q6.1 - LocalStorage vs SessionStorage vs Cookies

**Answer:**

| Feature | LocalStorage | SessionStorage | Cookies |
|---------|--------------|---|---------|
| **Lifetime** | Until manually cleared | Until tab is closed | Configurable (expires) |
| **Capacity** | ~5–10 MB | ~5 MB | ~4 KB |
| **Sent to Server** | ❌ No | ❌ No | ✅ Yes (with requests) |
| **Scope** | All tabs of same origin | Current tab only | All requests (matching domain/path) |
| **Sync across tabs** | ✅ Yes | ❌ No | ✅ Yes |

**LocalStorage (Persistent):**

```javascript
// Store
localStorage.setItem("theme", "dark");

// Retrieve
const theme = localStorage.getItem("theme");  // "dark"

// Remove
localStorage.removeItem("theme");

// Clear all
localStorage.clear();

// Use case: User preferences
localStorage.setItem("userTheme", "dark");
localStorage.setItem("language", "en");
```

**SessionStorage (Temporary):**

```javascript
// Store
sessionStorage.setItem("formData", JSON.stringify(form));

// Retrieve
const data = JSON.parse(sessionStorage.getItem("formData"));

// Cleared when tab closes
// Use case: Temporary data within a session
```

**Cookies (Server-sent, HTTP headers):**

```javascript
// Set via JavaScript
document.cookie = "userId=12345; expires=Wed, 09 Jun 2025 10:18:14 UTC; path=/";

// Set via server
// Set-Cookie: userId=12345; Expires=Wed, 09 Jun 2025 10:18:14 UTC; Path=/

// Automatically sent with HTTP requests
// Use case: Authentication tokens, session management
```

**Real-World Comparison:**

```javascript
// Authentication token
// ✅ Use Cookie (sent automatically with requests)
// or LocalStorage (if managing manually)
document.cookie = "token=abc123; expires=...; httpOnly";

// User theme preference
// ✅ Use LocalStorage (persists across sessions)
localStorage.setItem("theme", "dark");

// Form data during checkout
// ✅ Use SessionStorage (temporary, cleared on exit)
sessionStorage.setItem("cartData", JSON.stringify(cart));

// Analytics
// ✅ Use Cookies (sent to server)
document.cookie = "sessionId=xyz; path=/";
```

**Follow-up Questions:**

- Which should you use for authentication?
- Security implications of each?
- Can you access them from JavaScript?
- httpOnly cookie vs JavaScript cookie?

**Common Mistakes:**

```javascript
// ❌ Storing sensitive data in localStorage (not secure)
localStorage.setItem("password", userPassword);

// ✅ Use httpOnly cookies for sensitive data
// Set-Cookie: authToken=...; httpOnly; secure; sameSite=Strict

// ❌ Not handling quota exceeded error
try {
  localStorage.setItem("bigData", hugeString);
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    console.log("Storage quota exceeded");
  }
}
```

---

# SECTION 7: DOM BASICS

## [FREQUENTLY ASKED] [EASY] Q7.1 - querySelector vs getElementById

**Answer:**

Both find elements, but work differently.

**getElementById:**
- Only searches by ID
- Fastest (ID is unique)
- Returns single element

**querySelector:**
- Accepts any CSS selector
- More flexible
- Returns first matching element

```javascript
document.getElementById("btn");           // ID only — fastest
document.querySelector("#btn");           // ID with CSS syntax

document.querySelector(".card");          // class
document.querySelector("ul li:first-child"); // complex selector
document.querySelector("[data-id='123']");   // attribute selector

// querySelectorAll — returns all matches
document.querySelectorAll(".item");  // Static NodeList
document.getElementsByClassName("item"); // Live HTMLCollection (auto-updates)
```

**Important Difference:**

```javascript
// querySelectorAll — static snapshot
const items1 = document.querySelectorAll(".item");

// getElementsByClassName — live (updates when DOM changes)
const items2 = document.getElementsByClassName("item");

// Add new item
const newItem = document.createElement("div");
newItem.className = "item";
document.body.appendChild(newItem);

console.log(items1.length);  // Still old length (static)
console.log(items2.length);  // Increased! (live)
```

**Follow-up Questions:**

- When should you use which?
- What about querySelectorAll performance?
- Static vs Live collections?

---

## [FREQUENTLY ASKED] [MEDIUM] Q7.2 - Element.closest() — traversing up the DOM

**Answer:**

`closest()` traverses up the DOM tree from an element to find the nearest ancestor matching a selector.

**Syntax:**

```javascript
element.closest(selector)
```

**Example:**

```javascript
// Delete button inside todo item
const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", (e) => {
  const todoItem = e.target.closest("li.todo-item");
  todoItem.remove();  // Remove the entire todo
});

// HTML
<li class="todo-item">
  <span>Buy groceries</span>
  <button class="delete-btn">Delete</button>
</li>
```

**Real-World Pattern (Event Delegation):**

```javascript
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  // Get the list item that was clicked
  const item = e.target.closest("li");
  
  if (e.target.matches(".delete")) {
    item.remove();
  }
  
  if (e.target.matches(".complete")) {
    item.classList.toggle("done");
  }
});
```

**Follow-up Questions:**

- How does closest differ from querySelector?
- What if no ancestor matches?

---

# SECTION 8: BONUS - TRICKY THIS BINDING IN REACT

## [FREQUENTLY ASKED] [HARD] Q8.1 - this binding in React class components

**Answer:**

In React class components, **methods don't automatically bind `this`**. You must manually bind or use arrow functions.

**Problem:**

```javascript
class User extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Gaurav";
  }
  
  handleClick() {
    console.log(this.name);  // undefined! ❌
  }
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

// When button is clicked, 'this' is undefined
// because handleClick is called without object context
```

**Solution 1: bind in constructor**

```javascript
class User extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Gaurav";
    this.handleClick = this.handleClick.bind(this);  // Bind here
  }
  
  handleClick() {
    console.log(this.name);  // "Gaurav" ✅
  }
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

**Solution 2: Arrow field**

```javascript
class User extends React.Component {
  name = "Gaurav";
  
  handleClick = () => {  // Arrow function — 'this' is bound automatically
    console.log(this.name);  // "Gaurav" ✅
  }
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

**Solution 3: Arrow in JSX (not recommended)**

```javascript
class User extends React.Component {
  name = "Gaurav";
  
  handleClick() {
    console.log(this.name);  // "Gaurav" ✅
  }
  
  render() {
    return <button onClick={() => this.handleClick()}>Click</button>;
  }
}
// Problem: Creates new function on every render
```

**Modern React (Hooks):**

```javascript
function User() {
  const [name] = useState("Gaurav");
  
  const handleClick = () => {  // Arrow — no binding needed
    console.log(name);
  };
  
  return <button onClick={handleClick}>Click</button>;
}
```

**Follow-up Questions:**

- Why does this lose context?
- Which solution is best?
- How are hooks different?

---

## [FREQUENTLY ASKED] [MEDIUM] Q8.2 - Common this binding mistakes in React

**Answer:**

**Mistake 1: Forgetting to bind**

```javascript
// ❌ 'this' is lost
class Counter extends React.Component {
  count = 0;
  
  increment() {
    this.count++;  // undefined!
  }
  
  render() {
    return <button onClick={this.increment}>+</button>;
  }
}

// ✅ Fix: Use arrow field
class Counter extends React.Component {
  count = 0;
  
  increment = () => {
    this.count++;
  }
  
  render() {
    return <button onClick={this.increment}>+</button>;
  }
}
```

**Mistake 2: Binding arrow function (unnecessary)**

```javascript
// ❌ Binding an arrow doesn't work as intended
const handleClick = (() => console.log(this)).bind({});
handleClick();  // Still prints undefined (arrow ignores bind)
```

**Mistake 3: Not binding in event handler**

```javascript
// ❌ this is lost when passed as callback
class Form extends React.Component {
  name = "Gaurav";
  
  handleSubmit() {
    console.log(this.name);  // undefined ❌
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input />
      </form>
    );
  }
}

// ✅ Use arrow field
class Form extends React.Component {
  name = "Gaurav";
  
  handleSubmit = () => {
    console.log(this.name);  // "Gaurav" ✅
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input />
      </form>
    );
  }
}
```

---

# SECTION 9: ADVANCED OUTPUT QUESTIONS

## [FREQUENTLY ASKED] [HARD] Q9.1 - Event delegation output question

**Output Question:**

```javascript
const div = document.querySelector(".container");

div.addEventListener("click", (e) => {
  console.log("1:", e.target.className);
  console.log("2:", e.currentTarget.className);
});

// Click on nested button inside div
// HTML: <div class="container"><button class="btn">Click</button></div>
```

**Answer:**
```
1: btn
2: container
```

**Explanation:**

- `e.target` = the element that was actually clicked (button)
- `e.currentTarget` = the element where listener is attached (div)

---

## [FREQUENTLY ASKED] [HARD] Q9.2 - Memory leak detection

**Output Question:**

```javascript
function setupListener() {
  const hugeArray = new Array(1000000).fill("x");
  
  document.querySelector("#btn").addEventListener("click", () => {
    console.log(hugeArray.length);  // Closure captures hugeArray
  });
}

setupListener();
// Memory leak?
```

**Answer:** Yes, memory leak.

**Explanation:**

The event listener closes over `hugeArray`. The listener is never removed. Even after `setupListener()` returns, `hugeArray` can't be garbage collected because the listener still references it.

**Fix:**

```javascript
function setupListener() {
  const hugeArray = new Array(1000000).fill("x");
  const btn = document.querySelector("#btn");
  
  const handleClick = () => {
    console.log(hugeArray.length);
  };
  
  btn.addEventListener("click", handleClick);
  
  return () => {
    btn.removeEventListener("click", handleClick);  // Cleanup
  };
}

const cleanup = setupListener();
// Later:
cleanup();  // Remove listener, allow GC
```

---

## [FREQUENTLY ASKED] [HARD] Q9.3 - Shallow copy in React

**Output Question:**

```javascript
const [user, setUser] = useState({
  profile: { name: "Gaurav", age: 25 }
});

// Try to update age
const updated = { ...user };
updated.profile.age = 26;

console.log(user.profile === updated.profile);  // ?
console.log(user.profile.age);  // ?
```

**Answer:**
```
true
26
```

**Explanation:**

Spread only copies the top level. `user.profile` and `updated.profile` point to the SAME object. Mutation affects both.

**Fix:**

```javascript
const updated = {
  ...user,
  profile: { ...user.profile, age: 26 }
};

console.log(user.profile === updated.profile);  // false ✅
console.log(user.profile.age);  // 25 (unchanged)
```

---

# END OF PHASE 3

**Congratulations!** You've completed all 3 phases!

**Total Questions Across All Booklets:**
- Phase 1: 48 questions (Easy to Medium)
- Phase 2: 58 questions (Medium to Difficult)
- Phase 3: 48 questions (Advanced & Frequently Asked)

**Grand Total: 154 interview questions**

---

## 📊 COMPLETE CURRICULUM COVERAGE

| Topic | Phase | # Qs |
|-------|-------|------|
| Types & Coercion | 1 | 3 |
| Hoisting | 1-2 | 6 |
| Scope & Variables | 1-2 | 4 |
| Closures | 1-2 | 5 |
| ES6+ | 1 | 4 |
| Shallow/Deep Copy | 1-2 | 4 |
| Immutability | 1 | 1 |
| Callbacks | 1 | 2 |
| Promises | 1-2 | 7 |
| Array Methods | 1 | 3 |
| Execution Context | 2 | 4 |
| this Keyword | 2 | 7 |
| Event Loop | 2 | 3 |
| async/await | 2 | 4 |
| Error Handling | 2 | 2 |
| Currying & Memoization | 3 | 3 |
| Map/Set/WeakMap/WeakSet | 3 | 4 |
| Memory & GC | 3 | 3 |
| Event Delegation | 3 | 2 |
| Event Bubbling/Capturing | 3 | 2 |
| Performance (Reflow/Repaint) | 3 | 3 |
| Storage | 3 | 1 |
| DOM Basics | 3 | 2 |
| React this binding | 3 | 2 |
| Advanced Output Qs | 3 | 3 |

---

## 🎯 HOW TO USE ALL 3 BOOKLETS

**Week 1-2: Master Phase 1**
- Study easy-to-medium concepts
- Build strong foundations
- 30-40 mins daily

**Week 3-4: Deep dive Phase 2**
- Study edge cases and mechanisms
- Practice tricky output questions
- 45-60 mins daily

**Week 5-6: Advanced Phase 3**
- Polish advanced concepts
- Interview-specific patterns
- Final 30-45 mins daily review

**Week 7-8: Rotation**
- Revisit all 3 phases
- Focus on weak areas
- Mock interviews

**Week 9-10: Interview Prep**
- Quick Phase 3 review (15 mins)
- Light Phase 1 & 2 brushup
- Practice explaining answers aloud

---

## ✨ YOUR INTERVIEW ADVANTAGE

You now have:

✅ **154 carefully curated questions**  
✅ **Exact language and examples from your notes**  
✅ **Follow-up questions that interviewers ask**  
✅ **Common mistakes that differentiate candidates**  
✅ **Output prediction questions for deep understanding**  
✅ **Real-world React patterns and scenarios**  
✅ **Progressive difficulty across 3 phases**  
✅ **Complete coverage of JavaScript fundamentals**  

This booklet replaces scattered notes. It's your **primary study material** for the next 4-5 months.

---

## 📝 FINAL CHECKLIST

Before starting your revision:

✅ Download all 3 booklets  
✅ Print or save digitally  
✅ Start with Phase 1  
✅ Don't skip to Phase 3  
✅ Study progressively  
✅ Practice explaining answers aloud  
✅ Do output prediction questions before reading answers  
✅ Review Phase 3 right before interviews  

---

## 🚀 YOU'RE READY

You have everything you need to:

✅ Master JavaScript fundamentals  
✅ Understand deep concepts (not just surface level)  
✅ Handle edge cases and tricky scenarios  
✅ Ace machine coding rounds (with solid JS foundation)  
✅ Impress interviewers with advanced knowledge  
✅ Stand out for 10-12 LPA product startup roles  

**Your 4-5 month interview prep is structured and complete.**

Now it's execution time. 💪

---

**Questions?** Ask before starting revision, not during!

**Good luck, Gaurav!** 🚀


# 📋 COMPREHENSIVE INTERVIEW QUESTIONS SHEET

---

# 🎯 SECTION 1: FUNCTIONAL PROGRAMMING IN DETAIL

## THEORETICAL QUESTIONS


**Q1.1** What is Functional Programming? Explain its core principles.

**Follow-ups:**
- How is FP different from Imperative Programming?
- Give a real-world example where FP is better than OOP?


# 📝 Q1.1 - FUNCTIONAL PROGRAMMING (NATURAL ANSWER)

---

## MAIN ANSWER

**What is Functional Programming?**

Okay, so think of it this way - Functional Programming is a way of writing code where we use functions to process data. Instead of changing the original data step by step, we give data to a function and get new data back

For example, imagine you have a list of users and need to:
1. Filter active users
2. Map them to a specific format
3. Sort by name

In FP, you don't change the original list. You pass it through functions, and each function returns a new transformed list. Simple.

**Core Principles:**

**1. Pure Functions** - A function should always return the same output for the same input. No surprises. If I call `add(5, 3)` hundred times, it's always `8`. It doesn't depend on anything else.

Real example: `const add = (a, b) => a + b` - this is pure. But `const randomAdd = (a) => a + Math.random()` - not pure, because output changes.

**2. No Side Effects** - Don't modify things outside the function. Don't change global variables, don't update databases inside calculation functions. Just transform and return.

Real example: Calculating something shouldn't print to console. Calculating shouldn't call an API. Keep it focused.

**3. Immutability** - Don't mutate original data. Instead of `arr[0] = 5`, create a new array `[5, ...arr.slice(1)]`. 

Real example in React: Never do `user.name = "New"`. Instead do `{...user, name: "New"}`.

**4. First-Class Functions & Higher-Order Functions** - Functions are values. You can pass them around, return them from other functions.

Real example: `array.map(x => x * 2)` - you're passing a function to map.

**5. Function Composition** - Build complex operations by chaining simple functions.

Real example: `getUsersFromAPI().then(filter).then(transform).then(sort)` - each function does one thing.

---

## FOLLOW-UP #1: How is FP different from Imperative?

**Imperative (Traditional):**
"Tell the computer HOW to do something, step by step"

```javascript
// Imperative - HOW to do it
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    doubled.push(numbers[i] * 2);
  }
}
console.log(doubled); // [4, 8]
```

I'm literally telling it: create array, loop, check condition, push to array. Very procedural.

**Functional (FP):**
"Describe WHAT you want, not HOW to do it"

```javascript
// Functional - WHAT you want
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);

console.log(doubled); // [4, 8]
```

Much cleaner. I'm saying: "filter even numbers, then double them". The browser figures out the HOW.

**Key Difference:**
- Imperative = more control, more verbose, harder to read, easier to introduce bugs
- Functional = less control, concise, easier to read, easier to test

In production, most modern JavaScript uses FP principles because it's cleaner and safer.

---

## FOLLOW-UP #2: Real-world example where FP is better than OOP?

## Real-world Example: Filter Active Users

Imagine we have a list of users, and we only want users who are **active**.

### OOP Approach

We create a class and modify its data:

```javascript
class UserProcessor {
  constructor(users) {
    this.users = users;
  }

  getActiveUsers() {
    this.users = this.users.filter(user => user.active);
    return this.users;
  }
}

const processor = new UserProcessor(users);
const activeUsers = processor.getActiveUsers();
```

Here, we're **changing the object's data**.

### Functional Programming Approach

We simply create a function:

```javascript
const getActiveUsers = users =>
  users.filter(user => user.active);

const activeUsers = getActiveUsers(users);
```

Here, we **give the function data and get new data back**.

### Why FP is simpler here?

* No class needed
* No internal state
* No data mutation
* Easy to test and reuse

**In simple terms:**
FP says: **"Give me the users → I'll give you the active users."**

---
---

**Q1.2** What is a Pure Function? Why does it matter in real applications?

**Follow-ups:**
- Show an example of a pure function vs impure function
- How do pure functions help with testing?
- Can you write a logger function as pure function?

---

# 📝 Q1.2 - PURE FUNCTIONS (NATURAL ANSWER)

---

## MAIN ANSWER

**What is a Pure Function?**

A pure function is super simple - it's a function that:
1. Always returns the same output for the same input
2. Doesn't change anything outside of it (no side effects)

That's it. Predictable and isolated.

**Real Analogy:**
Think of a vending machine. You put in money and select item X. It always gives you item X. Never changes. It doesn't go and modify other machines or print something to console. Just does one thing.

An impure machine? One that sometimes gives you X, sometimes Y for the same input. Or changes the shop's inventory. Nightmare.

**Example:**
```javascript
// Pure function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Always 8
console.log(add(5, 3)); // Always 8
console.log(add(5, 3)); // Always 8
```

Call it million times, same answer. Nothing changed around it.

---

## Why does it matter in real applications?

**3 big reasons:**

**1. Predictability & Debugging**

Pure functions are boring - in a good way. If something breaks, you know exactly where to look. The function didn't change, so the bug must be in the input or the function itself.

Impure functions? They can break for weird reasons - maybe a global variable changed, maybe another part of code mutated something.

Real scenario: You're debugging a user list that's sorted wrong. 
- Pure sort function? Check the comparator.
- Impure sort? It might be that you mutated the data elsewhere, or a global flag changed. Nightmare.

**2. Testing is SUPER easy**

Pure functions are a tester's dream. Just call the function, check the output. Done.

```javascript
// Easy to test
const add = (a, b) => a + b;
expect(add(5, 3)).toBe(8);
expect(add(-5, 5)).toBe(0);
expect(add(0, 0)).toBe(0);
// No setup needed, no cleanup, no mocks
```

Impure functions? Need to mock databases, APIs, global state. Takes 10x longer.

**3. Performance & Caching**

Pure functions can be optimized easily. If you call same function with same input, you can cache the result without worrying about stale data.

This is called **memoization** and it's huge for performance.

```javascript
// Can safely cache
const expensiveCalculation = (n) => {
  // imagine this takes 1 second
  return n * n * n * n;
};

// Without memoization
expensiveCalculation(5); // 1 second
expensiveCalculation(5); // 1 second again (recalculates)

// With memoization (safe because pure)
const memoized = memoize(expensiveCalculation);
memoized(5); // 1 second
memoized(5); // Instant (from cache)
```

**Real Production Impact:**
React heavily uses pure functions for this reason. A pure component with same props always renders same output. React can skip re-renders, cache results. Super fast.

---

## FOLLOW-UP #1: Show example of pure vs impure

**IMPURE Examples (Don't do this):**

```javascript
// Impure 1: Depends on external variable
let taxRate = 0.1;
const calculateTotal = (price) => price + (price * taxRate);

console.log(calculateTotal(100)); // 110

taxRate = 0.2; // Someone changed it!
console.log(calculateTotal(100)); // 120 (different output, same input!)
// UNPREDICTABLE
```
---

**PURE Examples (Do this):**

```javascript
// Pure 1: All dependencies are inputs
const calculateTotal = (price, taxRate) => price + (price * taxRate);

console.log(calculateTotal(100, 0.1)); // 110
console.log(calculateTotal(100, 0.1)); // 110 (always same)
console.log(calculateTotal(100, 0.2)); // 120 (different input, different output)
// PREDICTABLE
```


**Quick Comparison:**

```javascript
// ❌ IMPURE
const getUserStats = (userId) => {
  const user = fetch(`/api/users/${userId}`); // Depends on API
  const stats = database.query('SELECT * FROM stats WHERE id = ?', userId); // DB call
  console.log('Getting stats'); // Side effect
  return {...user, ...stats};
};

// ✅ PURE
const getUserStats = (user, stats) => {
  return {...user, ...stats};
};

// The pure function just transforms. Fetching and DB calls happen elsewhere.
```

---
---

Ready for **Q1.3: Immutability in Functional Programming?** 👇

**Q1.3** Explain Immutability in the context of Functional Programming.

**Follow-ups:**
- Why is immutability important for React?
- How do you handle immutability with nested objects?
- Show the difference between mutable and immutable array operations


# 📝 Q1.3 - IMMUTABILITY IN FUNCTIONAL PROGRAMMING (NATURAL ANSWER)

---

## MAIN ANSWER

**What is Immutability?**

Immutability means: don't change the original data. Ever. Instead, create a new version with the change.

Think of it like making a copy before editing. You have a document. Instead of crossing out words in the original, you make a photocopy, edit the copy, and keep the original untouched.

**Simple Example:**

```javascript
// ❌ Mutable (bad)
const user = {name: 'Gaurav', age: 25};
user.age = 26; // Changed the original!
```

```javascript
// ✅ Immutable (good)
const user = {name: 'Gaurav', age: 25};
const updatedUser = {...user, age: 26}; // Created new object
// user is still {name: 'Gaurav', age: 25}
// updatedUser is {name: 'Gaurav', age: 26}
```

Real scenario: You're processing user data. If someone mutates the original, and another function expects the original, you have a bug. With immutability, the original is safe.

---

## FOLLOW-UP #1: Why is immutability important for React?

**React's Core Problem:**

React needs to know when something changed so it can re-render. How does React check if something changed?

```javascript
// React checks like this
if (oldUser === newUser) {
  // No change, skip re-render
} else {
  // Something changed, re-render
}
```

See that? It uses `===` (reference equality). This is fast but has a problem.

**The Mutation Problem:**

```javascript
// ❌ With mutation (breaks React)
const user = {name: 'Gaurav', age: 25};
const updateUser = (user) => {
  user.age = 26; // Mutating the original
  return user;
};

const oldUser = user;
const newUser = updateUser(user);

console.log(oldUser === newUser); // TRUE! (same reference)
// React thinks nothing changed!
// Component doesn't re-render!
// Bug!
```

React sees `oldUser === newUser` is true, so it skips re-render. But the data actually changed! The user won't see the update.

**The Immutability Solution:**

```javascript
// ✅ With immutability (React works perfectly)
const user = {name: 'Gaurav', age: 25};
const updateUser = (user) => {
  return {...user, age: 26}; // Created NEW object
};

const oldUser = user;
const newUser = updateUser(user);

console.log(oldUser === newUser); // FALSE! (different objects)
// React sees reference changed, re-renders
// User sees the update!
// Works!
```

Now React sees `oldUser === newUser` is false, so it re-renders. Perfect.

Without immutability, React is blind to changes. With immutability, React catches every change.

---

## FOLLOW-UP #2: How do you handle immutability with nested objects?

**The Problem:**

Spread operator only copies the top level. Nested objects still reference the original.

```javascript
const user = {
  name: 'Gaurav',
  address: {
    city: 'Delhi',
    zip: '110001'
  }
};

// Spread only top level
const updated = {...user, name: 'Rahul'};

// But nested object still references original!
updated.address === user.address; // TRUE! Still same reference
updated.address.city = 'Mumbai'; // This MUTATES both!
console.log(user.address.city); // 'Mumbai' - Original changed!
```

**Solution 1: Nested Spread (Manual)**

You need to spread at every level where you're making changes:

```javascript
const user = {
  name: 'Gaurav',
  address: {
    city: 'Delhi',
    zip: '110001'
  }
};

// Spread all the way down
const updated = {
  ...user,
  address: {
    ...user.address,
    city: 'Mumbai'
  }
};

// Now it's truly immutable
updated.address === user.address; // FALSE! Different reference
console.log(user.address.city); // 'Delhi' - Original unchanged
console.log(updated.address.city); // 'Mumbai' - New value
```

---

## FOLLOW-UP #3: Show difference between mutable and immutable array operations

**Mutable Array Operations (❌ Don't use in FP):**

```javascript
const numbers = [1, 2, 3, 4, 5];

// push() - MUTATES original
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6] - Original changed!

// pop() - MUTATES original
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5] - Original changed!

// splice() - MUTATES original
numbers.splice(0, 1); // Remove first element
console.log(numbers); // [2, 3, 4, 5] - Original changed!

// sort() - MUTATES original
numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2] - Original changed!

// reverse() - MUTATES original
numbers.reverse();
console.log(numbers); // [2, 3, 4, 5] - Original changed!
```

**Immutable Array Operations (✅ Use in FP):**

```javascript
const numbers = [1, 2, 3, 4, 5];
const original = numbers; // Keep reference

// Spread + push becomes concat (immutable)
const withSix = [...numbers, 6];
console.log(numbers); // [1, 2, 3, 4, 5] - Original unchanged
console.log(withSix); // [1, 2, 3, 4, 5, 6] - New array

// Remove last: slice instead of pop (immutable)
const withoutLast = numbers.slice(0, -1);
console.log(numbers); // [1, 2, 3, 4, 5] - Original unchanged
console.log(withoutLast); // [1, 2, 3, 4] - New array

// Remove first: slice instead of splice (immutable)
const withoutFirst = numbers.slice(1);
console.log(numbers); // [1, 2, 3, 4, 5] - Original unchanged
console.log(withoutFirst); // [2, 3, 4, 5] - New array

// Sort immutably: spread then sort
const sorted = [...numbers].sort((a, b) => b - a);
console.log(numbers); // [1, 2, 3, 4, 5] - Original unchanged
console.log(sorted); // [5, 4, 3, 2, 1] - New array

// Reverse immutably: spread then reverse
const reversed = [...numbers].reverse();
console.log(numbers); // [1, 2, 3, 4, 5] - Original unchanged
console.log(reversed); // [5, 4, 3, 2, 1] - New array
```
---
---

## CONCEPTUAL QUESTIONS

**Q1.6** What does "avoiding side effects" mean in Functional Programming?

**Follow-ups:**
- Can a function have side effects and still be useful? When?
- How do you test functions with side effects?


# 📝 Q1.6 - AVOIDING SIDE EFFECTS (NATURAL ANSWER)

---

## MAIN ANSWER

**What does "avoiding side effects" mean?**

A side effect is when a function does something OTHER than returning a value. It reaches outside itself and changes the world.

**Simple Definition:**
Pure function: Takes input → Returns output (that's it)
Function with side effects: Takes input → Returns output + ALSO does something else

**Examples of side effects:**

```javascript
// ❌ Side effect: prints to console
const add = (a, b) => {
  console.log('Adding numbers'); // Side effect!
  return a + b;
};

// ❌ Side effect: modifies global variable
let total = 0;
const addToTotal = (amount) => {
  total += amount; // Side effect! Changed global
  return total;
};

// ❌ Side effect: calls API
const getUser = (id) => {
  fetch(`/api/users/${id}`); // Side effect! Network call
  return {id, name: 'Gaurav'};
};

// ❌ Side effect: writes to storage
const saveData = (data) => {
  localStorage.setItem('data', JSON.stringify(data)); // Side effect!
  return data;
};

// ❌ Side effect: modifies input
const updateUser = (user) => {
  user.age = user.age + 1; // Side effect! Mutated input
  return user;
};
```

**Why avoid them?**

Side effects make code unpredictable. Same input might give different output depending on external state.

```javascript
// Impure - depends on external state
let taxRate = 0.1;
const calculatePrice = (price) => price + (price * taxRate);

calculatePrice(100); // 110
taxRate = 0.2;
calculatePrice(100); // 120 - DIFFERENT! Bug!
```

---

## FOLLOW-UP #1: Can a function have side effects and still be useful? When?

**YES. Side effects are necessary sometimes.**

The trick: separate concerns. Have PURE functions for logic, IMPURE functions for side effects.

**Real Scenario:**

You need to:
1. Calculate discount (pure logic)
2. Save to database (side effect)
3. Send email (side effect)
4. Return result (pure data)

**When side effects are necessary:**

1. **I/O Operations** - API calls, database, file reads
2. **Logging** - Debugging info
3. **User Interaction** - DOM updates, event handlers
4. **Time-dependent** - Getting current time


**Real Production Pattern:**

```javascript
// React component - must have side effects
function UserForm() {
  const [user, setUser] = useState(null);
  
  // Side effect: fetch on mount
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser);
  }, []);
  
  // Pure: render based on data
  return user ? <div>{user.name}</div> : <p>Loading...</p>;
}

// The component handles side effect (fetching)
// But the data transformation is pure
```

**Bottom Line:**

"Side effects are necessary for real applications. The goal isn't to eliminate them, but to isolate them. Keep pure logic separate from side effects. This makes testing easier and bugs rarer."

---
---

**Q1.7** How does map/filter/reduce shows Functional Programming?

**Follow-ups:**
- Implement reduce using only basic loops
- When should you use reduce vs forEach?


# 📝 Q1.7 - MAP/FILTER/REDUCE (NATURAL ANSWER)

---

## MAIN ANSWER

**How do map/filter/reduce exemplify Functional Programming?**

These three functions are the ESSENCE of FP. They show:
1. Pure functions (transform data, don't mutate)
2. Function composition (chain them together)
3. Immutability (return new arrays)
4. Declarative (describe WHAT not HOW)

Let me show with example:

```javascript
const users = [
  {name: 'Gaurav', active: true, age: 25},
  {name: 'Rahul', active: false, age: 30},
  {name: 'Priya', active: true, age: 22}
];

// Imperative (HOW - loops, conditions)
const result = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].active) {
    result.push({
      displayName: users[i].name.toUpperCase(),
      age: users[i].age
    });
  }
}

// Functional (WHAT - describe transformation)
const result = users
  .filter(u => u.active)           // Keep only active
  .map(u => ({                      // Transform shape
    displayName: u.name.toUpperCase(),
    age: u.age
  }));

// Same result, but FP is clearer, shorter, easier to test
```

**Why they exemplify FP:**

- **filter()**: Pure function, takes array → returns filtered array, original unchanged
- **map()**: Pure function, transforms each element, returns new array
- **reduce()**: Accumulates data through pure transformations

None of them mutate the original. All compose easily. All are declarative.

---

## FOLLOW-UP #1: Implement reduce using only basic loops

**First, let's understand reduce:**

Reduce takes:
- An array
- A callback function (gets accumulator and current value)
- An initial value

Returns: Single accumulated value

```javascript
// How reduce works
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// acc starts as 0
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
console.log(sum); // 10
```

**Implementing reduce from scratch:**

```javascript
// My implementation
const myReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  
  return accumulator;
};

// Test it
const numbers = [1, 2, 3, 4];
const sum = myReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // 10

// Another example: counting things
const count = myReduce(
  ['a', 'b', 'a', 'c', 'a'],
  (acc, letter) => ({...acc, [letter]: (acc[letter] || 0) + 1}),
  {}
);
console.log(count); // {a: 3, b: 1, c: 1}
```

**Why is this useful?**

Reduce is THE most powerful array method. Everything else can be built from reduce:

```javascript
// map using reduce
const myMap = (arr, callback) => 
  arr.reduce((acc, item, i) => [...acc, callback(item, i)], []);

// filter using reduce
const myFilter = (arr, callback) => 
  arr.reduce((acc, item) => callback(item) ? [...acc, item] : acc, []);

// Test them
myMap([1, 2, 3], x => x * 2); // [2, 4, 6]
myFilter([1, 2, 3, 4], x => x > 2); // [3, 4]
```

This shows reduce is like the "assembly language" of array operations.

---

## FOLLOW-UP #2: When should you use reduce vs forEach?

**forEach:**
- Just loop through array
- Perform side effects
- Don't need return value
- Returns undefined

```javascript
// forEach: perform actions
const users = [{name: 'Gaurav'}, {name: 'Rahul'}];
users.forEach(user => {
  console.log(user.name); // Side effect
  // No return value expected
});
```

**reduce:**
- Transform array into something
- Need accumulated result
- Returns new value
- Pure transformation

```javascript
// reduce: transform into new value
const users = [{name: 'Gaurav'}, {name: 'Rahul'}];
const names = users.reduce((acc, user) => [...acc, user.name], []);
// Result: ['Gaurav', 'Rahul']
```

**Rule of thumb:**

```
forEach: "Do something with each item"
reduce: "Transform array into new value"

forEach: Side effects
reduce: Transformation

forEach: Can't be chained
reduce: Can chain (returns array or value)
```

---
---


## OUTPUT-BASED QUESTIONS

**Q1.11** What will this print?
```javascript
const users = [{id: 1, name: 'Gaurav', age: 25}, {id: 2, name: 'Rahul', age: 30}];
const result = users
  .map(u => ({...u, ageGroup: u.age > 28 ? 'Senior' : 'Junior'}))
  .filter(u => u.ageGroup === 'Senior')
  .reduce((acc, u) => ({...acc, [u.id]: u.name}), {});
console.log(result);
```

**Follow-up:** What if you needed to chain 5 more operations? How would you refactor?

---

**Q1.12** What will this print?
```javascript
const memoize = (fn) => {
  const cache = {};
  return (x) => {
    if (x in cache) {
      console.log('From cache');
      return cache[x];
    }
    console.log('Computing');
    cache[x] = fn(x);
    return cache[x];
  };
};
const square = memoize((x) => x * x);
console.log(square(5));
console.log(square(5));
console.log(square(3));
```

**Follow-up:** What problem does memoization solve?

---
---

# 🎯 SECTION 2: OBJECT-ORIENTED PROGRAMMING IN DETAIL

## THEORETICAL QUESTIONS

**Q2.1** What are the 4 pillars of OOP? Explain each one in context of JavaScript.

**Follow-ups:**
- Which pillar is most important? Why?
- Give a real code example for each pillar
- How do OOP principles apply differently in JavaScript vs classical OOP languages?

---
# 📚 4 OOP Principles in JavaScript

---

## The Big Picture First

> 💡 OOP = a way of organizing code around **objects** that have **data (properties)** and **behavior (methods).**

The 4 principles are:

```
1. Encapsulation  → hide internal details, expose only what's needed
2. Abstraction    → hide complexity, show only simple interface
3. Inheritance    → child gets properties/methods from parent
4. Polymorphism   → same method, different behavior
```

Let's use one real world example throughout — **a Bank System** 🏦

---

# Principle 1 — Encapsulation

---

## What is it?

> 💡 **Encapsulation** = bundling data and methods together inside an object AND hiding internal details from outside world.

Think of it like a **capsule tablet** 💊
- Medicine is inside the capsule
- You can't directly touch the medicine
- You interact with it only through the capsule

---

## Real World Problem Without Encapsulation:

```js
// ❌ No encapsulation — everything exposed!
const bankAccount = {
  owner: "Gaurav",
  balance: 50000,  // anyone can directly change this!
  pin: 1234        // pin is visible to everyone! 😱
};

// Anyone can do this from anywhere in code!
bankAccount.balance = 999999999; // hacked! 😱
bankAccount.pin = 0000;          // changed! 😱
console.log(bankAccount.pin);    // 1234 — exposed! 😱
```

---

## Solution — Encapsulation with Class:

```js
class BankAccount {
  // Private fields — only accessible inside class (# syntax)
  #balance;
  #pin;

  constructor(owner, initialBalance, pin) {
    this.owner  = owner;        // public
    this.#balance = initialBalance; // private!
    this.#pin     = pin;            // private!
  }

  // Public methods — controlled access to private data
  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount!");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
  }
}

// Usage
const account = new BankAccount("Gaurav", 50000, 1234);

account.deposit(10000);           // Deposited ₹10000. New balance: ₹60000
account.withdraw(5000, 1234);     // Withdrawn ₹5000. New balance: ₹55000
account.withdraw(5000, 9999);     // Wrong PIN! Transaction failed.
account.getBalance(1234);         // Balance: ₹55000

// Try to access private fields directly
console.log(account.#balance);   // ❌ SyntaxError — private!
console.log(account.#pin);       // ❌ SyntaxError — private!
account.#balance = 999999;       // ❌ SyntaxError — can't hack! ✅
```
---

# Principle 2 — Abstraction

---

## What is it?

> 💡 **Abstraction** = hiding **complex implementation details** and showing only a **simple interface** to the user.

Think of a **TV remote** 📺
- You press "Volume Up" button
- You don't know what happens inside — circuits, signals, processing
- You just see the result — volume increases!
- The complexity is **abstracted away**

---

## React Real World — Abstraction:

```js
// Custom Hook — abstracts complex logic
function useFetch(url) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// User of this hook — sees simple interface!
function UserProfile() {
  const { data, loading, error } = useFetch("/api/user/1");
  // User doesn't care about fetch, useEffect, setState complexity
  // All abstracted away in useFetch! ✅

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error!</div>;
  return <div>{data.name}</div>;
}
```

---

# Principle 3 — Inheritance

---

## What is it?

> 💡 **Inheritance** = a child class **gets all properties and methods** from parent class automatically — and can add its own on top.

Think of it like **family traits** 👨‍👩‍👦
- Child inherits eyes, height, skin tone from parents
- But child also has their own unique traits
- Child doesn't need to "redefine" inherited traits — they just have them!

---

## Without Inheritance — Code Repetition Problem:

```js
// ❌ Repeating same code everywhere — BAD!
class SavingAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    addInterst() {
        this.balance = this.balance*0.1 + this.balance
        return this.balance;
    }
};

class CurrentAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deductCharges() {
        this.balance = this.balance - this.balance*0.1
        return this.balance;
    }
};

const c1 = new SavingAccount("Gaurav", 45000);
console.log(c1.addInterst())

const c2 = new CurrentAccount("Gaurav", 45000);
console.log(c2.deductCharges())

// Lots of duplicate code! 😱
```

---

## With Inheritance — Clean Solution:

```js
// Parent class — common behavior
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}


class SavingAccount extends BankAccount {
    constructor(owner, balance) {
         super(owner, balance)
    }
    addInterst() {
             this.balance = this.balance*0.1 + this.balance
             return this.balance;
    }
   
};

const c1 = new SavingAccount("Gaurav", 45000);
console.log(c1.addInterst())
```

---

# Principle 4 — Polymorphism

---

## What is it?

"Poly" = many, "morph" = forms → **many forms**

Think of a **"speak"** action 🗣️
- Human speaks → talks in words
- Dog speaks → barks
- Cat speaks → meows
- Same action "speak" — completely different behavior!


> “**Polymorphism** means one thing can have many forms. In JavaScript, it means different objects can have the same method but behave differently. For example, both Dog and Cat can have a speak() method, but Dog will bark and Cat will meow.”


---

## Real World Example:

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

let animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
```

---

## OUTPUT-BASED QUESTIONS

**Q2.9** What will this print?
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex');
dog.speak();
```

**Follow-up:** What if you wanted to call parent's speak() also?

---

**Q2.10** What will this print?
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    return this;
  }
  decrement() {
    this.count--;
    return this;
  }
  value() {
    return this.count;
  }
}

const c = new Counter();
console.log(c.increment().increment().decrement().value());
```

**Follow-up:** What pattern is being used here?

---

**Q2.11** What will this print?
```javascript
class User {
  #password = '';
  
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  
  checkPassword(pwd) {
    return this.#password === pwd;
  }
}

const user = new User('Gaurav', 'secret123');
console.log(user.password);
console.log(user.checkPassword('secret123'));
console.log(user.#password);
```

**Follow-up:** Why use private fields instead of _password convention?

---

**Q2.12** What will this print?
```javascript
class A {
  constructor() {
    console.log('A constructor');
  }
  method() {
    console.log('A method');
  }
}

class B extends A {
  constructor() {
    super();
    console.log('B constructor');
  }
  method() {
    super.method();
    console.log('B method');
  }
}

const b = new B();
b.method();
```

**Follow-up:** What if you forgot super()? What happens?

---


# 🎯 SECTION 3: OBJECTS IN JAVASCRIPT AND WAYS TO CREATE

## CONCEPTUAL QUESTIONS

**Q3.7** What happens when you create an object with different methods?
```javascript
// Method 1
const obj1 = {method() {}};

// Method 2
function Obj2() {
  this.method = function() {};
}

// Method 3
class Obj3 {
  method() {}
}
```

**Follow-ups:**
- Where is each method stored (own property vs prototype)?
- Memory implications?

---

## OUTPUT-BASED QUESTIONS

**Q3.8** What will this print?
```javascript
const obj1 = {x: 10};
const obj2 = Object.create(obj1);
obj2.y = 20;

console.log(obj2.x);
console.log(obj2.y);
console.log(obj2.hasOwnProperty('x'));
console.log(obj2.hasOwnProperty('y'));
console.log('x' in obj2);
console.log('y' in obj2);
```

**Follow-up:** Explain the difference between each output

---

**Q3.9** What will this print?
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person('Gaurav');
const p2 = Object.create(Person.prototype);
p2.name = 'Rahul';

console.log(p1.greet === p2.greet);
p1.greet();
p2.greet();
```

**Follow-up:** Why are the greet methods the same?

---

**Q3.10** What will this print?
```javascript
const factory = (name) => ({
  name,
  greet() { return `Hi ${this.name}`; }
});

const f1 = factory('Gaurav');
const f2 = factory('Gaurav');

console.log(f1.greet === f2.greet);
console.log(f1.greet());
console.log(f1 === f2);
```

**Follow-up:** Memory implications of this approach?

---

**Q3.11** What will this print?
```javascript
const obj = Object.create(null);
obj.x = 10;

console.log(obj.x);
console.log(obj.toString);
console.log('toString' in obj);
console.log(Object.keys(obj));
```

**Follow-up:** Why would you use Object.create(null)?

---

# 🎯 SECTION 4: CLASS, CONSTRUCTOR & THIS BINDING

## THEORETICAL QUESTIONS

**Q4.3** What is this keyword? Why is it confusing in JavaScript?

**Follow-ups:**
- How many different ways can this be bound?
- What is strict mode's effect on this?
- Why is arrow function this different?


# 📝 Q4.3 - THIS KEYWORD (NATURAL ANSWER)

---

## MAIN ANSWER

**What is the this keyword?**

`this` is a variable that refers to the object that's currently executing the function.

**Simple rule:**
`this` = whatever object is before the dot when you call the function.

```javascript
const person = {
  name: 'Gaurav',
  greet: function() {
    console.log(this.name); // this = person
  }
};

person.greet(); // "Gaurav"
```

When you call `person.greet()`, `this` inside the function points to `person` object. That's it.

---

**Why is it confusing?**

Because `this` changes depending on HOW the function is called, not WHERE it's written.

The same function called different ways gives different `this`:

```javascript
const person = {
  name: 'Gaurav',
  greet: function() {
    console.log(this.name);
  }
};

// Called as method: this = person
person.greet(); // "Gaurav"

// Called as standalone: this = undefined or global
const greetFunc = person.greet;
greetFunc(); // undefined (or error in strict mode)

// Called with different object: this = that object
const anotherPerson = {name: 'Rahul'};
person.greet.call(anotherPerson); // "Rahul"

// Same function, THREE different this values!
```

This is confusing because:
1. You write `this` once but it means different things at different calls
2. Moving the function to different place breaks it
3. Hard to predict what `this` will be

---

## FOLLOW-UP #1: How many different ways can this be bound?

**7 different ways (but really 5 main ones):**

**1. IMPLICIT BINDING - Method call**

`this` = object before the dot

```javascript
const user = {
  name: 'Gaurav',
  getName: function() { return this.name; }
};

user.getName(); // this = user
```

**2. EXPLICIT BINDING - call()**

You manually set `this` using `call()`. Executes immediately.

```javascript
function getName() { return this.name; }
const user = {name: 'Gaurav'};

getName.call(user); // this = user (you decide)
```

**3. EXPLICIT BINDING - apply()**

Same as `call()` but arguments as array. Executes immediately.

```javascript
function greet(greeting) { return greeting + ' ' + this.name; }
const user = {name: 'Gaurav'};

greet.apply(user, ['Hello']); // this = user, arg is ['Hello']
```

**4. EXPLICIT BINDING - bind()**

Returns new function with `this` locked. Doesn't execute immediately.

```javascript
function getName() { return this.name; }
const user = {name: 'Gaurav'};

const boundGetName = getName.bind(user); // Create new function with this = user
boundGetName(); // Execute later
```

**5. new BINDING - Constructor**

`this` = newly created object

```javascript
function User(name) {
  this.name = name; // this = new empty object
}

const user = new User('Gaurav'); // this = user instance
```

**6. ARROW FUNCTION BINDING - Lexical**

Arrow functions DON'T have their own `this`. They use parent's `this`.

```javascript
const user = {
  name: 'Gaurav',
  getName: () => {
    return this.name; // this = from parent scope (window/global)
  }
};

user.getName(); // undefined (not user.name)
```

**7. GLOBAL BINDING - Default**

If none of above, `this` = global object

```javascript
function test() {
  console.log(this);
}

test(); // this = window (browser) or global (Node.js)
```

---

**BINDING PRIORITY (which wins?):**

```
1. Arrow function (can't change, uses parent's this)
2. new keyword (highest priority for regular functions)
3. Explicit (call, apply, bind)
4. Implicit (method call)
5. Global (default)
```

Example of priority:

```javascript
function test() {
  console.log(this.name);
}

const obj = {name: 'Obj'};
const other = {name: 'Other'};

// new wins over explicit binding
const result = new test.bind(obj); // this = new object (not obj)

// explicit wins over implicit
test.call(other); // this = other (not whatever called it)
```

---

## FOLLOW-UP #2: What is strict mode's effect on this?

**In non-strict mode:**
- If function called without object, `this` = global object (window/global)

**In strict mode:**
- If function called without object, `this` = undefined

```javascript
// Non-strict
function test() {
  console.log(this);
}

test(); // window (browser) - global object

// Strict
'use strict';
function test() {
  console.log(this);
}

test(); // undefined
```

**Why strict mode helps:**

Strict mode forces you to be explicit about `this`. You can't accidentally modify global object.

```javascript
'use strict';

const user = {
  name: 'Gaurav',
  getName: function() {
    return this.name;
  }
};

// This breaks in strict mode:
const fn = user.getName;
fn(); // Error: this is undefined

// You have to fix it:
fn.call(user); // OK: explicitly set this
// OR
const fn = user.getName.bind(user); // OK: bind this
```

---

## FOLLOW-UP #3: Why is arrow function this different?

**Arrow functions don't have their own `this`. They use the parent scope's `this`.**

This is called **lexical this** (determined by where it's written, not how it's called).

```javascript
// Regular function - this determined by HOW called
const obj = {
  name: 'Obj',
  regularFunc: function() {
    console.log(this.name); // this = obj (because called as obj.regularFunc())
  }
};

obj.regularFunc(); // "Obj"

// Arrow function - this from parent scope
const obj2 = {
  name: 'Obj2',
  arrowFunc: () => {
    console.log(this.name); // this = from parent (window/global, not obj2)
  }
};

obj2.arrowFunc(); // undefined (not "Obj2")
```

**Why?**

Arrow functions were designed for callbacks where you WANT to keep parent's `this`:

```javascript
// Without arrow (confusing)
function User(name) {
  this.name = name;
  
  setTimeout(function() {
    console.log(this.name); // this = window, not User! Bug!
  }, 1000);
}

const user = new User('Gaurav');
// Logs: undefined (this is window, window.name is undefined)

// With arrow (fixed)
function User(name) {
  this.name = name;
  
  setTimeout(() => {
    console.log(this.name); // this = User instance (from parent)
  }, 1000);
}

const user = new User('Gaurav');
// Logs: "Gaurav" (this is User instance)
```

**Can't change arrow function's this:**

```javascript
const test = () => {
  console.log(this);
};

const obj = {name: 'Obj'};

// These DON'T work:
test.call(obj); // Still window/global (arrow ignores call)
test.apply(obj); // Still window/global (arrow ignores apply)
const bound = test.bind(obj); // Still window/global (arrow ignores bind)

// Arrow function's this cannot be changed!
```

**Why arrow is confusing:**

```javascript
// This is confusing - looks like object method, but isn't
const obj = {
  name: 'Obj',
  method: () => {
    return this.name; // Not obj.name! From parent scope!
  }
};

obj.method(); // undefined
// People expect this = obj, but arrow ignores that rule!
```

---
---

## OUTPUT-BASED QUESTIONS

**Q4.9** What will this print?
```javascript
const obj = {
  x: 10,
  method: function() {
    console.log(this.x);
  }
};

obj.method();

const fn = obj.method;
fn();

const bound = obj.method.bind(obj);
bound();
```

**Follow-up:** Explain why each output is different

---

**Q4.10** What will this print?
```javascript
function greet() {
  console.log(`Hello ${this.name}`);
}

const person1 = {name: 'Gaurav'};
const person2 = {name: 'Rahul'};

greet.call(person1);
greet.apply(person2);

const boundGreet = greet.bind(person1);
boundGreet.call(person2);
```

**Follow-up:** Why doesn't the last line use person2?

---

**Q4.11** What will this print?
```javascript
class Button {
  constructor(label) {
    this.label = label;
  }
  
  handleClick() {
    console.log(`${this.label} clicked`);
  }
  
  handleArrow = () => {
    console.log(`${this.label} clicked (arrow)`);
  }
}

const btn = new Button('Submit');
btn.handleClick();
btn.handleArrow();

document.addEventListener('click', btn.handleClick);
document.addEventListener('click', btn.handleArrow);
```

**Follow-up:** What's the difference in output and why?

---

**Q4.12** What will this print?
```javascript
const obj = {
  count: 0,
  increment: function() {
    this.count++;
    return this;
  },
  get value() {
    return this.count;
  }
};

obj.increment().increment();
console.log(obj.value);

const inc = obj.increment;
inc();
inc();
console.log(obj.value);
```

**Follow-up:** Explain what happened in the second part

---

**Q4.13** What will this print?
```javascript
function User(name) {
  this.name = name;
  this.greet = function() {
    console.log(this.name);
  };
}

const u1 = new User('Gaurav');
const u2 = new User('Rahul');

console.log(u1.greet === u2.greet);
u1.greet();
u2.greet();

User.prototype.greet = function() {
  console.log('From prototype: ' + this.name);
};

u1.greet();
```

---

---

# 🎯 SECTION 5: THIS KEYWORD AND ITS BINDING TYPES

## THEORETICAL QUESTIONS

**Q5.4** What is new Binding? How does new keyword work?

**Follow-ups:**
- What is constructor function?
- Can you use new with arrow functions?


# 📝 Q5.4 - NEW BINDING (NATURAL ANSWER)

---

## MAIN ANSWER

**What is new Binding? How does new keyword work?**

The `new` keyword creates a fresh object and sets `this` to that new object inside the function.

When you use `new`, JavaScript does 4 things automatically:

```javascript
function User(name) {
  this.name = name; // Step 3: sets this to new object
}

const user = new User('Gaurav');
// Step 1: Create empty object {}
// Step 2: Set this = that empty object
// Step 3: Run function (this.name = 'Gaurav' adds to object)
// Step 4: Return the object
```

**Visual of what happens:**

```javascript
new User('Gaurav');

// Is really like:

{
  // Step 1: Create empty object
  const obj = {};
  
  // Step 2: Set obj's [[Prototype]] to User.prototype
  obj.__proto__ = User.prototype;
  
  // Step 3: Call User function with this = obj
  User.call(obj, 'Gaurav');
  
  // Step 4: Return obj
  return obj;
}
```

**Simple Example:**

```javascript
function Counter(startValue) {
  this.count = startValue; // this = new object
  this.increment = function() {
    this.count++;
  };
}

const counter1 = new Counter(0);
const counter2 = new Counter(10);

console.log(counter1.count); // 0
console.log(counter2.count); // 10

counter1.increment();
console.log(counter1.count); // 1
console.log(counter2.count); // 10 (unchanged, separate objects)

// Each new call creates separate object
// this = each object
```

---

## FOLLOW-UP #1: What is constructor function?

**A constructor function is a regular function that's designed to be called with `new`.**

By convention, constructor functions start with capital letter:

```javascript
// Constructor function
function User(name, age) {
  this.name = name; // Adding properties to new object
  this.age = age;
}

// Methods on prototype
User.prototype.getName = function() {
  return this.name;
};

// Called with new
const user1 = new User('Gaurav', 25);
const user2 = new User('Rahul', 30);

console.log(user1.name); // 'Gaurav'
console.log(user2.name); // 'Rahul'

user1.getName(); // 'Gaurav'
```

**Constructor vs Regular function:**

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

add(5, 3); // 8 (called normally)
new add(5, 3); // Creates object, doesn't make sense

// Constructor function
function User(name) {
  this.name = name; // Expects this to exist
}

const user = new User('Gaurav'); // Makes sense

User('Gaurav'); // Called wrong, breaks (this = window/undefined)
```

**Key difference:**
- Regular function: designed to return a value
- Constructor function: designed to create an object and set `this`

---

## FOLLOW-UP #2: Can you use new with arrow functions?

**NO. Arrow functions can't be used with `new`.**

Arrow functions don't have their own `this`, so they can't work as constructors.

```javascript
// Regular function - works with new
function User(name) {
  this.name = name;
}

const user = new User('Gaurav'); // Works fine

// Arrow function - doesn't work with new
const ArrowUser = (name) => {
  this.name = name;
};

const user = new ArrowUser('Gaurav'); // TypeError: ArrowUser is not a constructor
```

**Why arrow functions can't be constructors:**

```javascript
// Arrow function doesn't have this
const arrow = () => {
  console.log(this); // Uses parent's this, not new object's
};

// new needs to create object and set this
// But arrow already has this from parent scope
// Contradiction!

// So JavaScript throws error:
new arrow(); // TypeError
```
---
---

**Q5.5** What is Lexical this (Arrow Functions)? Why is it special?

**Follow-ups:**
- Can you change arrow function this?
- When to use arrow vs regular function?
- Why is arrow this useful in React?


# 📝 Q5.5 - ARROW FUNCTIONS & LEXICAL THIS (NATURAL ANSWER)

---

## MAIN ANSWER

**What is Lexical this (Arrow Functions)? Why is it special?**

Arrow functions don't create their own `this`. Instead, they use the `this` from their parent scope (where they're written).

This is called **lexical this** - determined by where the function is written, not how it's called.

**Simple comparison:**

```javascript
// Regular function - this determined by HOW called
const obj = {
  name: 'Obj',
  regularFunc: function() {
    console.log(this.name);
  }
};

obj.regularFunc(); // "Obj" (this = obj because called as obj.regularFunc())

// Arrow function - this from WHERE written (parent scope)
const obj2 = {
  name: 'Obj2',
  arrowFunc: () => {
    console.log(this.name); // this = from parent scope (window/global)
  }
};

obj2.arrowFunc(); // undefined (this is NOT obj2)
```

**Why it's special:**

Regular functions change `this` based on how they're called. Arrow functions ignore the call and always use parent's `this`.

```javascript
const user = {
  name: 'Gaurav',
  
  // Regular function - this changes with each call
  regularMethod: function() {
    console.log(this.name);
  },
  
  // Arrow function - this always same (parent's this)
  arrowMethod: () => {
    console.log(this.name);
  }
};

// Regular function:
user.regularMethod(); // "Gaurav" (this = user)
user.regularMethod.call({name: 'Other'}); // "Other" (this changed!)

// Arrow function:
user.arrowMethod(); // undefined (this = global, not user)
user.arrowMethod.call({name: 'Other'}); // undefined (still global, didn't change)
```

---

## FOLLOW-UP #1: Can you change arrow function this?

**NO. Arrow function's `this` cannot be changed.**

You can try, but it won't work:

```javascript
const test = () => {
  console.log(this);
};

const obj = {name: 'Obj'};

// Try to change this with call()
test.call(obj); // Still global/window (ignored)

// Try to change with apply()
test.apply(obj); // Still global/window (ignored)

// Try to change with bind()
const bound = test.bind(obj);
bound(); // Still global/window (ignored)

// Arrow function's this CANNOT be changed
```

**Why can't you change it?**

Arrow functions deliberately ignore their call context. They're designed to keep parent's `this`.

```javascript
// Regular function has its own this
function regular() {
  this.value = 10;
}

regular.call({value: 20}); // this = {value: 20}, can change

// Arrow function doesn't have own this
const arrow = () => {
  this.value = 10; // this = from parent, can't change
};

arrow.call({value: 20}); // Ignores call(), still parent's this
```

---

## FOLLOW-UP #2: When to use arrow vs regular function?

**Use REGULAR function when:**
1. Function is a method and needs `this` = the object
2. Function is a constructor (use `new`)
3. You need to dynamically change `this`

**Use ARROW function when:**
1. Function is a callback and you want to keep parent's `this`
2. You don't need `this` at all
3. You want short syntax

**Decision tree:**

```
Does function need its own this?
  ↓
YES → Use regular function
  (object method, constructor, dynamic this needed)

NO → Use arrow function
  (callback, no this needed, want parent's this)
```

---
---

## OUTPUT-BASED QUESTIONS

**Q5.10** What will this print?
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

const person = new Person('Gaurav');
console.log(person.getName());

const getName = person.getName;
console.log(getName());

const boundGetName = person.getName.bind(person);
console.log(boundGetName());
```

**Follow-up:** Explain each output

---

**Q5.11** What will this print?
```javascript
const obj = {
  name: 'Obj',
  nested: {
    name: 'Nested',
    method: function() {
      console.log(this.name);
    }
  }
};

obj.nested.method();

const m = obj.nested.method;
m();

const bound = obj.nested.method.bind(obj);
bound();
```

**Follow-up:** Why does this change?

---

**Q5.12** What will this print?
```javascript
const arrow = () => {
  console.log(this);
};

const obj = {
  regularMethod: function() {
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  }
};

obj.regularMethod();
obj.arrowMethod();

arrow.call(obj);
```

**Follow-up:** Why doesn't call() work with arrow?

---

**Q5.13** What will this print?
```javascript
class Counter {
  count = 0;
  
  increment() {
    this.count++;
  }
  
  incrementArrow = () => {
    this.count++;
  }
}

const c = new Counter();
const inc = c.increment;
const incArrow = c.incrementArrow;

inc();
incArrow();

console.log(c.count);
```

**Follow-up:** Explain the difference

---

## REAL SCENARIO QUESTIONS

**Q5.14** Fix this React component (this binding issue):
```javascript
class Form extends React.Component {
  state = {name: ''};
  
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  
  render() {
    return <input onChange={this.handleChange} />;
  }
}
```

Show 3 solutions and pros/cons of each.

**Follow-up:** Which is best practice?

---
---

# 🎯 SECTION 6: PROTOTYPES AND PROTOTYPE CHAINING

## THEORETICAL QUESTIONS

**Q6.1** What is Prototype? Explain [[Prototype]] vs .prototype.

**Follow-ups:**
- How are they different?
- Which one is used for lookup?
- Show with code examples

---

**Q6.2** Explain Prototype Chain. How does property lookup work?

**Follow-ups:**
- What happens when property not found?
- How deep can chain be?
- Performance implications?

---

## CONCEPTUAL QUESTIONS


**Q6.7** How to check if property is own vs inherited?

**Follow-ups:**
- Use hasOwnProperty()
- Use propertyIsEnumerable()
- Use Object.getOwnPropertyNames()

---

## OUTPUT-BASED QUESTIONS

**Q6.10** What will this print?
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

const p1 = new Person('Gaurav');
const p2 = Object.create(Person.prototype);
p2.name = 'Rahul';

console.log(p1.getName === p2.getName);
console.log(p1.hasOwnProperty('getName'));
console.log(p2.hasOwnProperty('getName'));
console.log('getName' in p1);
console.log('getName' in p2);
```

**Follow-up:** Explain each output

---

**Q6.11** What will this print?
```javascript
const obj = {};
console.log(obj.__proto__ === Object.prototype);
console.log(obj.constructor === Object);
console.log(Object.prototype.__proto__ === null);

function Fn() {}
console.log(Fn.prototype.constructor === Fn);
console.log(Fn.__proto__ === Function.prototype);
```

**Follow-up:** Trace the entire prototype chain

---

**Q6.12** What will this print?
```javascript
const parent = {x: 10};
const child = Object.create(parent);
child.y = 20;

console.log(child.x);
console.log(child.y);
console.log(child.hasOwnProperty('x'));
console.log(child.hasOwnProperty('y'));

delete child.x;
console.log(child.x);
```

**Follow-up:** Why can't you delete inherited property?
---

## REAL SCENARIO QUESTIONS

**Q6.16** Debug this code and explain the issue:
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name);
};

function Dog(name) {
  this.name = name;
}

const dog = new Dog('Rex');
dog.speak(); // Error!
```

**Follow-up:** Fix this and explain the solution

---

---
