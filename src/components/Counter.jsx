import React, { useState } from "react";

//The true Power of React is realised by using stateful components
//Most interactive apps need to stateful i.e they need to remeber what has happened in the past
//Like in game of tic tac toe , you need to remeber the position of circle cross

//useState is an internal function that is provided by react
//But this function is called a hook, any function with use as prefix is a hook
//Hooks allow function components to have access to state and other React features.

//The only argument to useState is the initial/default state. In this example, it is 0 because our counter starts from zero
// We call useState inside(on top) a function component(like the Counter() here) to add some local state to it. 
//React will preserve this state between re-renders. 
//useState returns a pair: the current state value(counter) and a function that lets you update it(setter function that updates the value).


 function Counter() {
     const [count,setCount]=useState(0)
     function incrementFn () {
         setCount(count+1)

       }
     function decrementFn () {
        setCount(count-1)
       }

  return (
    <div>
    <h1>Welcome to My Counter App</h1>
    <h3>My counter is : {count}</h3>
    <button onClick={decrementFn}>Decrement</button>
    <button onClick={incrementFn}>Increment</button>
    </div>
  )
}

export default Counter
