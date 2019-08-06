import React from 'react';
import './App.css';
import Establishement from './Component/establishement'
import './css/style.css'
import Data from './Component/data'
import HappyDrink from './Component/happyDrink'

function App() {
  return (
    <div className="App">
      <HappyDrink max={25} min={10}/>
      {Data.map(value => <Establishement establishement={value} />)}
    </div>
  );
}

export default App;
