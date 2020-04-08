import React from 'react';
import UserDataAutonomousClass from './components/UserDataAutonomousClass';
import UserDataHOCClass from './components/UserDataHOCClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>User Data - Basic Autonmous Class Component</h2>
      <UserDataAutonomousClass />

      <h2>User Data - HOC Using Class</h2>
      <UserDataHOCClass />
      {/* <h2>User Data - Render Props Class Component</h2>
      <UserDataAutonomousClass />
      <h2>User Data - Function Component Using React Hooks</h2>
      <UserDataAutonomousClass /> */}
    </div>
  );
}

export default App;
