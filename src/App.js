import React from 'react';
import UserDataAutonomousClass from './components/UserDataAutonomousClass';
import UserDataHOCClass from './components/UserDataHOCClass';
import UserDataRenderPropsClass from './components/UserDataRenderPropsClass';
import UserDataReactHooks from './components/UserDataReactHooks';
import './App.css';
import SimpleUserData from './components/SimpleUserData';

function App() {
  return (
    <div className="App">
      {/* <h2>User Data - Basic Autonmous Class Component</h2>
      <UserDataAutonomousClass />
      <hr></hr>
      <h2>User Data - HOC Using Class</h2>
      <UserDataHOCClass />
      <hr></hr>
      <h2>User Data - Render Props Class Component</h2>
      <UserDataRenderPropsClass children={SimpleUserData} /> */}
      <hr></hr>
      <h2>User Data - Function Component Using React Hooks</h2>
      <UserDataReactHooks />
    </div>
  );
}

export default App;
