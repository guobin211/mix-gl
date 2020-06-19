import React from 'react'
import CoordinateSystem from './components/CoordinateSystem'

function App() {

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  return (
    <div className='App'>
      <CoordinateSystem size={size} />
    </div>
  );
}

export default App;
