import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Custom from "./Custom";//illustrate the proper use of props
import Counter from "./Counter";
import Quotes from "./Quotes";
//you can use js in jsx inside curly brackets, only arguement or operators work
const amIabove18=true;
const age=18;
function App() {
    function buttonClickfn(){
        console.log("I am clicked");
    }

    return <div>
        <Header/>
        <button onClick={buttonClickfn}>CLick me!</button>
        <div className="content">
            <p>This is content {2+2} {2**2}</p>
            {amIabove18?<p>Kill me</p>:<p>Don't</p>}
        </div>
        <Custom name="Anshul" greeting="Hola!!" minage={age*2} />
        <Footer/>
        <Counter/>
        <Quotes/>

    </div>
    
}

export default App