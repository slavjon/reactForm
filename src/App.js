import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import OneForm from './components/OneForm/OneForm'

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <OneForm showTcpaText={true}/>
      </div>

    </>
  );
}

export default App;
