import React from 'react';
import './App.css';
import Image from './components/Image'

const img = 'https://www.fillmurray.com/284/196'

function App() {
  return (
    <div className="App">
      <Image src={img}/>
    </div>
  );
}

export default App;
