import Viewer from "./components/Viewer";
import './App.css'
import Controller from './components/Controller';
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {

  const [count, setCount] = useState(0);
  const isMount = useRef(false);
  
  const onClickButton = (value) => {
    setCount(count + value);
  }

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count%2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>

  )
}

export default App
