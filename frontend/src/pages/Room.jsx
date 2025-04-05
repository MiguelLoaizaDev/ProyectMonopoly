import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ElegantButton from "../components/ElegantButton";
import styles from "../css/Room.module.css"; // Importa el CSS como módulo

const Room = () => {
    const { roomCode } = useParams(); // Obtiene el código de la sala desde la URL
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]); // Lista de jugadores conectados
    const [isHost, setIsHost] = useState(false); // Indica si el usuario es el anfitrión

    useEffect(() => {
        // Simula la conexión a la sala y la obtención de jugadores
        const fetchPlayers = () => {
            setPlayers(["Jugador 1", "Jugador 2", "Jugador 3"]); // Simula jugadores conectados
            setIsHost(true); // Simula que el usuario es el anfitrión
        };

        fetchPlayers();
    }, []);

    const handleStartGame = () => {
        if (isHost) {
            navigate("/game-room"); // Redirige a la página del juego
            // Aquí puedes agregar la lógica para iniciar el juego
        } else {
            alert("Solo el anfitrión puede iniciar el juego.");
        }
    };

    const handleLeaveRoom = () => {
        console.log("Saliendo de la sala...");
        navigate("/room-options"); // Redirige a las opciones de sala
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sala: {roomCode}</h1>
            <div className={styles.playersList}>
                <h2 className={styles.subtitle}>Jugadores Conectados:</h2>
                <ul>
                    {players.map((player, index) => (
                        <li key={index} className={styles.player}>
                            {player}
                        </li>
                    ))}
                </ul>
            </div>
            {isHost && (
                <ElegantButton text="Iniciar Juego" onClick={handleStartGame} />
            )}
            <ElegantButton text="Salir de la Sala" onClick={handleLeaveRoom} />
        </div>
    );
};

export default Room;