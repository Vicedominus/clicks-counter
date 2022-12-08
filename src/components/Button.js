import React from "react";
import '../stylesheets/Button.css';

function Button ({ text, clickListener }) {
    return (
        <button
            onClick={clickListener}>
            {text}
        </button>
    );
}

export default Button;