import React from 'react';
import logo from './logo.svg';
import './App.css';

enum ColorEnum {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

const ColorArray = ['red', 'green', 'blue'];

function App() {
   const testEnumPerformance = () => {
    console.time('Enum Test');
    for (let i = 0; i < 1000000; i++) {
      const color = ColorEnum.Red; // Accessing enum value
    }
    console.timeEnd('Enum Test');
  };

  const testArrayPerformance = () => {
    console.time('Array Test');
    for (let i = 0; i < 1000000; i++) {
      const color = ColorArray[0]; // Accessing array value
    }
    console.timeEnd('Array Test');
  };

  return (
    <div>
      <button onClick={testEnumPerformance}>Test Enum Performance</button>
      <button onClick={testArrayPerformance}>Test Array Performance</button>
    </div>
  );
}

export default App;
