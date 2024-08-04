import { useEffect } from "react";
import { useState } from "react";
function App() {
    const [val, setVal] = useState(0);
    return (
        <div className="App">
            <h1>Hello World from parent</h1>
            <h2>{val}</h2>
            <button onClick={() => setVal(prev => prev + 5653)}>Change</button>
            <Child val={val} setVal={setVal} />
        </div>
    );
}

function Child(props) {
    if (props.val > 10) {
        return false
    }
    let [newVal, setNewVal] = useState(50);  
    useEffect(() => {
       console.log('is it running?');
       return () => {
        // Clear timers. CLose websockets, close server polling
       }
    },[])
    return (
        <div className="Child">
            <h1>Hello World from child</h1>
            <h2>{newVal}</h2>
            <button onClick={() => setNewVal(prev => prev + 800)}>Change</button>
            {/* <App /> */}
        </div>
    );
    
}

export default App;