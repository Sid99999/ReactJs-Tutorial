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


//setCount is a setter function 
//It takes a value as an arguement
//if typeOf value is a function like in increaseby2 or decreaseby2,react calls the function(inside the setter) which takes the old value of the counter as arguement and return the new value of the counter
//It is advised to take function as arguement if the newer value is dependent on older value like in the case of counter

//otherwise if typeOf value is anything other then function like boolean string integer or object etc it just sets counter as value and rerender it. Like in incrementFn and decrementFn 


 function Counter() {
     const [count,setCount]=useState(0)
     function incrementFn () {
         setCount(count+1)

       }
     function decrementFn () {
        setCount(count-1)
       }
       function increaseby2 () {
         setCount(function(oldcountval){
           return oldcountval+2;
         })

       }
     function decreaseby2 () {
        setCount(function (oldcountval) {  
          return oldcountval-2;
        })
       }

  return (
    <div>
    <h1>Welcome to My Counter App</h1>
    <h3>My counter is : {count}</h3>
    <button onClick={decrementFn}>Decrement</button>
    <button onClick={incrementFn}>Increment</button>
    
    <button onClick={decreaseby2}>Decrement By 2</button>
    <button onClick={increaseby2}>Increment By 2</button>
    </div>
  )
}

export default Counter
