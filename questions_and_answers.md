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

#### Answer: A.

<i>In this question at began initialize greeting variable by using let Key word then the next line assign this variable value a empty object. The console log the greeting variable. The console print must be a empty object because wn can declarer any variable without assign value in javascript using ver or let key word and we can assign this variable value any time after the  declarer.  </i>

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

#### Answer: C.

<i>This question is a function which have a 2 parameter a and b. In this function body return addition operation a+b. Then call this function gives argument 1 for parameter a and gives "2" for parameter b.
argument 1 is a number but argument "2" is not a number its a string. Ii javascript if we try to addition a number with any string javascript concatinate the number type to string and place both side by side and return the result.  </i>

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

#### Answer: A.

<i>In this question began declare a array which name food then declare a object name info and set a property name favoriteFood then assign this property value food array first item then reassign the property vale by a fruit at lats console loge food array. The complier show output the same value of food array Because we cheng only object property value we dont cheng array value.  </i>

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

#### Answer: B .

<i>In this question declare a function name sayHi which sat a parameter name. The function return sting lateral use the parameter then called the function without argument in the console, it must be return a string with undefine because in javascript if we declarer any function and set parameter then call the function without argument the javascript engin set the parameter value undefined as argument.   </i>

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

#### Answer: C .

<i>The question do forEach operation in the nums array and tack each element and check in if condition if the condition is true encriment the conunt variable value 1. In the num arr have 4 element after forEach the counter value is 3 because the nums array first element is 0 when the if condition check the 0 it return false thats why count variable value will be 3. </i>

</p>
</details>
