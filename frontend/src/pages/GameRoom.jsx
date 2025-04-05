import React, { useState } from "react";
import ElegantButton from "../components/ElegantButton"; // Importa el botón elegante
import { useNavigate } from "react-router-dom";
import styles from "../css/GameRoom.module.css"; // Importa el CSS como módulo

const GameRoom = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([
        { name: "Jugador 1", balance: 1000 },
        { name: "Jugador 2", balance: 2000 },
        { name: "Jugador 3", balance: 2500 },
        { name: "Jugador 4", balance: 4000 },
    ]);
    const [currentPlayer, setCurrentPlayer] = useState({
        name: "Jugador 1",
        balance: 100,
    });

    const handleTurn = () => {
        console.log("Se paso el turno");
    };

    const handleMove = () => {
        navigate("/make-move"); // Redirige a la página de realizar movimiento
    };

    const handleTransactionLog = () => {
        console.log("Registro de Transacciones");
        // Aquí puedes agregar la lógica para mostrar el registro de transacciones
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.currentPlayer}>
                {currentPlayer.name}
            </h1>
            <p className={styles.balance}>Saldo: ${currentPlayer.balance}</p>
            <div className={styles.playersList}>
                {players.map((player, index) => (
                    <p key={index} className={styles.player}>
                        {player.name}: ${player.balance}
                    </p>
                ))}
            </div>
            <div className={styles.actions}>
                <ElegantButton text="Pasar Turno" onClick={handleTurn} />
                <ElegantButton text="Realizar Movimiento" onClick={handleMove} />
                <ElegantButton text="Registro de Transacciones" onClick={handleTransactionLog} />
            </div>
        </div>
    );
};

export default GameRoom;