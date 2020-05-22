import React, { useState } from 'react'
import CoordinateSystem from './components/CoordinateSystem'

function App() {

  const [size] = useState({width: 500, height: 400})

  return (
    <div className='App'>
      <CoordinateSystem size={size}/>
    </div>
  );
}

export default App;
