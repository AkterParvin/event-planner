<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:A

<i>Write your explanation here</i>
The code declares a variable "greeting" without assigning a value and assigns an empty object to a typographically called variable "greetign." When this is logged to the terminal, it prints the empty object, indicating that option A is correct.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
TypeError is the right answer. When you try to add a number (1) to a string ("2"), JavaScript meets a type mismatch and raises a TypeError because it cannot execute arithmetic operations between data types.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>
The info.favoriteFood property is initially assigned the value of food[0], which is "🍕". However, later in the code, it's reassigned to "🍝". This reassignment does not affect the food array, so food remains unchanged, and its value is still ['🍕', '🍫', '🥑', '🍔'].
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
When called in this code, the'sayHi' function expects a parameter 'name' to be given. When'sayHi()' in 'console.log' is called, no parameter is passed, therefore 'name' is 'undefined,' resulting in the output "Hi there, undefined."
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
This code sets the variable count to 0 and uses the forEach method to loop through the nums array. It verifies each element in the array and advances the count by one if the element is true (not equal to 0 in this case). Because the nums array has two truthy entries (1 and 2), the final value of count is 2, which is logged to the console.
</p>
</details>