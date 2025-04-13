import React, { useState } from 'react';

// Exercise 1(i): Create a React component that displays "Hello, React!" without JSX
function HelloReactWithoutJSX() {
  return React.createElement(
    'h1',
    null,
    'Hello, React!'
  );
}

// Exercise 1(ii): Modify the above code using JSX
function HelloReactWithJSX() {
  return (
    <h1>Hello, React!</h1>
  );
}

// Exercise 1(iii): Modify to display a message stored in a variable
function HelloReactWithVariable() {
  const message = "Hello from a variable!";
  return (
    <h1>{message}</h1>
  );
}

// Exercise 2: Create a component that renders a list of three fruits dynamically
function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];
  
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Exercise 3: Component with styled message using inline CSS
function StyledMessage() {
  const styles = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px"
  };
  
  return (
    <div style={styles}>This is a styled message in React!</div>
  );
}

// Exercise 4: Component displaying sum of squares of two numbers
function SumOfSquares() {
  const num1 = 3;
  const num2 = 4;
  const sumOfSquares = (num1 * num1) + (num2 * num2);
  
  return (
    <p>The sum of squares of {num1} and {num2} is: {sumOfSquares}</p>
  );
}

// Exercise 5: Conditional rendering based on isMorning
function Greeting() {
  const isMorning = true; // Change to false to test the other message
  
  return (
    <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>
  );
}

// Exercise 6: Display current day of the week
function DayOfWeek() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = new Date().getDay();
  
  return (
    <h2>Today is {days[currentDay]}</h2>
  );
}

// Exercise 7: Check if a number is prime
function PrimeChecker() {
  const number = 17; // Change this to test different numbers
  
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  };
  
  return (
    <div>
      <h2>Prime Number Check</h2>
      <p>
        {number} is {isPrime(number) ? 'a prime number' : 'not a prime number'}.
      </p>
    </div>
  );
}

// Exercise 8: Temperature Converter (Class Component)
class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 32
    };
  }
  
  handleCelsiusChange = (e) => {
    const celsius = parseFloat(e.target.value);
    const fahrenheit = celsius * 9/5 + 32;
    this.setState({
      celsius: celsius,
      fahrenheit: fahrenheit
    });
  }
  
  handleFahrenheitChange = (e) => {
    const fahrenheit = parseFloat(e.target.value);
    const celsius = (fahrenheit - 32) * 5/9;
    this.setState({
      celsius: celsius,
      fahrenheit: fahrenheit
    });
  }
  
  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <div>
          <label>
            Celsius:
            <input 
              type="number" 
              value={this.state.celsius} 
              onChange={this.handleCelsiusChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Fahrenheit:
            <input 
              type="number" 
              value={this.state.fahrenheit} 
              onChange={this.handleFahrenheitChange} 
            />
          </label>
        </div>
      </div>
    );
  }
}

// Exercise 9: Reverse string and check if palindrome
function StringReverser() {
  const inputString = "React";
  const reversedString = inputString.split('').reverse().join('');
  const isPalindrome = inputString.toLowerCase() === reversedString.toLowerCase();
  
  return (
    <div>
      <h2>String Operations</h2>
      <p>Original: {inputString}</p>
      <p>Reversed: {reversedString}</p>
      <p>Is Palindrome: {isPalindrome ? "Yes" : "No"}</p>
    </div>
  );
}

// Exercise 10: Generate random number on button click
function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);
  
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };
  
  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

// Exercise 11: Check if a year is a leap year
function LeapYearChecker() {
  const year = 2024; // Change this to test different years
  
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };
  
  return (
    <div>
      <h2>Leap Year Check</h2>
      <p>
        {year} is {isLeapYear(year) ? 'a leap year' : 'not a leap year'}.
      </p>
    </div>
  );
}

// Exercise 12: UserGreeting class component with firstName and lastName props
class UserGreeting extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    
    return (
      <h2>Hello, {firstName} {lastName}!</h2>
    );
  }
}

// Main App component that renders all exercise components
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React JSX Exercises</h1>
      
      <HelloReactWithoutJSX />
      <HelloReactWithJSX />
      <HelloReactWithVariable />
      <FruitList />
      <StyledMessage />
      <SumOfSquares />
      <Greeting />
      <DayOfWeek />
      <PrimeChecker />
      <TemperatureConverter />
      <StringReverser />
      <RandomNumberGenerator />
      <LeapYearChecker />
      <UserGreeting firstName="Paarth " lastName="Jain" />
    </div>
  );
}

export default App;
