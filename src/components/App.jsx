import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//you can use js in jsx inside curly brackets, only arguement or operators work
const amIabove18=true;

function App() {
    return <div>
        <Header/>
        <div className="content">
            <p>This is content {2+2} {2**2}</p>
            {amIabove18?<p>Kill me</p>:<p>Don't</p>}
        </div>
        <Footer/>


    </div>
    
}

export default App