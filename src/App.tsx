import React from 'react';
import './App.css';
import  GreetApp  from './app/components/basicProps/GreetApp';
import  MsgApp  from './app/components/advanceProps/MsgApp';


function App() {

  return (
    <>
      <div className="App">
        Hello world!
      </div>
      <GreetApp />
      <MsgApp />
    </>
  );
}

export default App;
