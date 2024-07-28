import { useState } from 'react';
import CountDisplay from './components/CountDisplay/CountDisplay';
import TimerActions from './components/TimerActions/TimerActions';

function App() {
  let [timer, setTimer] = useState(0);
  return (
    <section className='main-comp'>
      <CountDisplay timer={timer} />
      <TimerActions timer={timer} setTimer={setTimer} />  
    </section>
  )
  
}

/*
  In React, data is passed in a unidirectional way i.e. from Parent to Child
    - Props in React are data which can be passed from a parent to a child
    - Props are immutable by nature
    - Props are read-only by default

    When you want a reactive state to be passed across diff components, you use useState react hook
*/


export default App;
