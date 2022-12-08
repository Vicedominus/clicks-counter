import React from "react";
import '../stylesheets/Counter.css';

function Counter({ counter }) {
    return (
        <div 
            className="counter">
            {counter}    
        </div>
    );
}

export default Counter;