import React from "react";
import "../css/ElegantButton.css"; // Importa el CSS del botón

const ElegantButton = ({ text, onClick }) => {
    return (
        <button className="boton-elegante" onClick={onClick}>
            {text}
        </button>
    );
};

export default ElegantButton;