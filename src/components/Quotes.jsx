import React,{useState} from "react";

const quotes=["Old is Gold",
            "Honesty is the best policy",
            "You either die a hero or live long to see yourself as villain",
            "If you are good enough never do it for free"];
function Quotes() {
    const [quote,setQuote]=useState("Generate Random Quotes")

    function generate() {
        const RandomNumber=Math.floor(Math.random()*quotes.length)
        setQuote(quotes[RandomNumber])
      }
    return <div>
        <h1>{quote}</h1>
        <button onClick={generate}>Click me for quotes</button>
    </div>
    
  }

  export default Quotes