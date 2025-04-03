import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElegantButton from "../components/ElegantButton";
import styles from "../css/JoinRoom.module.css"; // Importa el CSS como módulo

const JoinRoom = () => {
    const [roomCode, setRoomCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        if (roomCode.trim() === "") {
            setError("Por favor, ingresa un código de sala válido.");
            return;
        }
        navigate(`/room/${roomCode}`);
    };

    const handleBack = () => {
        navigate("/room-options");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>UNIRSE A UNA SALA</h1>
            <p className={styles.text}>Ingresa el código de la sala para unirte.</p>
            <div className={styles.inputForm}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Código de sala"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <ElegantButton text="UNIRSE" onClick={handleJoinRoom} />
            <ElegantButton text="VOLVER" onClick={handleBack} />
        </div>
    );
};

export default JoinRoom;