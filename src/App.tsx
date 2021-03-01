import './App.css';
import {useState} from 'react'

interface countState{
count:number

}
function App() {
const [count,setCount]=useState<number>(0)

const add=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  setCount(prev=>prev+1)
}
  return (
    <div className="App">
      <header className="App-header">
      <h1>{count}</h1>
      <button onClick={e=>setCount(prev=>prev-1)}> -</button>

      <button onClick={add}>+</button>
      </header>
    </div>
  );
}

export default App;
