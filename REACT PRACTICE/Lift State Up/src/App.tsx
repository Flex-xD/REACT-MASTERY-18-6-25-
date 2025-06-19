import { useState } from "react";

const MyButton = ({count , onClick} : myButtonType) => {
  return (
    <button onClick={onClick}>
      Button has been clicked {count} times
    </button>
  )
}

type myButtonType = {
  count:number , 
  onClick:()=>void
}

const App = () => {
  const [count, setCount] = useState<number>(0);

  function handleClick () {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Click the button below to change the state of both the button components.</h1>
      <p>The state is being passed down by the parent component . That's why both the components states are being changed here.</p>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

export default App