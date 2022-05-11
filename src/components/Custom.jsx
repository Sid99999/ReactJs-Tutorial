import React from "react";

function Custom(props) {
    return <div>
        <p>{props.greeting} {props.name} this is props, you should have a minimum age of {props.minage}</p>
    </div>
  }

  export default Custom;