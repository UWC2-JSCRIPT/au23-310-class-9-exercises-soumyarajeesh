// Example
const createCounter = () => {
  let count = 0;
  const getCount = () => count;
  const increaseCount = () => count++;

  return {
    getCount,
    increaseCount
  };
};
const counter = createCounter();
counter.increaseCount();
console.log(counter.getCount());
// 1

// Exercise:
// This function should create an empty array of messages, and should then
// return an object with the following methods:
// - addMessage method that adds a message to the array
// - getMessage(index) method that returns the message at index index

//const createMessageHolder = () => {};
function createMessageHolder() {
  const messages = [];

  return {
    addMessage: function (message) {
      messages.push(message);
    },
    getMessage: function (index) {
      if (index >= 0 && index < messages.length) {
        return messages[index];
      } else {
        return "Invalid index";
      }
    },
  };
}

// Example usage:
const messageHolder1 = createMessageHolder();
messageHolder1.addMessage("Message 1");
messageHolder1.addMessage("Message 2");

console.log(messageHolder1.getMessage(0)); // Output: "Message 1"
console.log(messageHolder1.getMessage(1)); // Output: "Message 2"
console.log(messageHolder1.getMessage(2)); // Output: "Invalid index"


// Test
const messageHolder = createMessageHolder();
messageHolder.addMessage('Hello!');
messageHolder.addMessage('Goodbye!');
console.log(messageHolder.getMessage(0));
// "Hello!""

// Example: non-currying
const addNumbers = function(num1, num2) {
  return num1 + num2;
};
console.log(addNumbers(5, 3));
// 8

// Example: currying
const addToNumber = function(num1) {
  const addToFirst = function(num2) {
    return num1 + num2;
  };
  return addToFirst;
};
const addThree = addToNumber(3);
console.log(addThree(9));
// 12

console.log(addThree(41));
// 44

// Create a function createGreeting
// - This should accept a single argument: greeting (i.e. "Hello")
// This will return a function a function greet
// - This accepts a single argument, name (i.e. "Matt")
// - This function should return the greeting combined with the name, (i.e. "Hello Matt")
//const createGreeting = function(greeting) {};
function createGreeting(greeting) {
  return function greet(name) {
    return `${greeting} ${name}`;
  };
}

const sayHello = createGreeting("Hello");
const greetingMessage = sayHello("Matt");
console.log(greetingMessage); // Output: "Hello Matt"

// Test
const welcomeGreet = createGreeting('Welcome');
console.log(welcomeGreet('Alice'));

const helloGreet = createGreeting('Hello');
console.log(helloGreet('Winnie'));
