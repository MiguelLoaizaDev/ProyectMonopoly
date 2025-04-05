import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElegantButton from "../components/ElegantButton"; // Botón reutilizable
import styles from "../css/MakeMove.module.css"; // Importa el CSS como módulo

const MakeMove = () => {
    const navigate = useNavigate();
    const [players] = useState(["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"]); // Lista de jugadores
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [amount, setAmount] = useState("");

    const handleTransfer = () => {
        if (!origin || !destination || !amount) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        if (origin === destination) {
            alert("El origen y el destinatario no pueden ser el mismo.");
            return;
        }
        console.log(`Transferencia realizada: ${amount} de ${origin} a ${destination}`);
        // Aquí puedes agregar la lógica para realizar la transferencia
    };

    const handleBackToMenu = () => {
        navigate("/game-room"); // Redirige de vuelta a la sala de juego
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>MOVIMIENTO</h1>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="origin">Origen:</label>
                        <select
                            id="origin"
                            className={styles.input}
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                        >
                            <option value="">Selecciona un jugador</option>
                            {players.map((player, index) => (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="destination">Destinatario:</label>
                        <select
                            id="destination"
                            className={styles.input}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        >
                            <option value="">Selecciona un jugador</option>
                            {players.map((player, index) => (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="amount">Monto:</label>
                        <input
                            id="amount"
                            type="number"
                            className={styles.input}
                            placeholder="Ingresa el monto"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className={styles.actions}>
                        <ElegantButton text="TRANSFERIR" onClick={handleTransfer} />
                        <ElegantButton text="MENU PRINCIPAL" onClick={handleBackToMenu} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeMove;