import React from 'react';
import './App.css';
import  GreetApp  from './app/components/basicProps/GreetApp';
import  MsgApp  from './app/components/advanceProps/MsgApp';
import  ButtonApp from './app/components/eventProps/buttonApp'

function App() {

  return (
    <>
      <div className="App">
        Hello world!
      </div>
      <GreetApp />
      <MsgApp />
      <ButtonApp/>
    </>
  );
}

export default App;
