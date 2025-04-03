// filepath: c:\Users\migue\OneDrive\Documentos\Programacion\React\Monopoly\frontend\src\pages\Home.js
import React from "react";
import { Link } from "react-router-dom";
import ElegantButton from "../components/ElegantButton"; // Importa el componente reutilizable
import "../css/Home.css"; // Importa el CSS de la vista

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenido a Monopoly</h1>
            <p className="description">
                Ahora todo podrá ser más fácil, divertido y transparente de jugar
            </p>
            <Link to="/login">
                <ElegantButton text="Iniciar Sesión" />
            </Link>
            <Link to="/register">
                <ElegantButton text="Registrarse" />
            </Link>
        </div>
    );
}

export default Home;