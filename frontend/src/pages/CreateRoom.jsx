import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElegantButton from "../components/ElegantButton"; // Reutiliza el botón elegante
import styles from "../css/CreateRoom.module.css"; // Importa el CSS como módulo

const CreateRoom = () => {
    const [roomCode, setRoomCode] = useState(""); // Estado para el código de la sala
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        // Simulación de creación de sala
        const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase(); // Genera un código único
        setRoomCode(generatedCode);
        console.log("Sala creada con código:", generatedCode);
    };

    const handleBack = () => {
        navigate("/room-options"); // Redirige a la vista de opciones de sala
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CREAR SALA</h1>
            {!roomCode ? (
                <>
                    <p className={styles.text}>Haz clic en el botón para generar una sala.</p>
                    <ElegantButton text="GENERAR SALA" onClick={handleCreateRoom} />
                </>
            ) : (
                <>
                    <p className={styles.text}>¡Sala creada con éxito!</p>
                    <p className={styles.roomCode}>
                        Código de la sala: <strong>{roomCode}</strong>
                    </p>
                    <ElegantButton text="INICIAR" />
                    <ElegantButton text="VOLVER" onClick={handleBack} />
                </>
            )}
        </div>
    );
};

export default CreateRoom;