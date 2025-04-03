import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import ElegantButton from "../components/ElegantButton"; // Importa el botón reutilizable
import LogoutButton from "../components/LogoutButton"; // Importa el nuevo botón de Log Out
import styles from "../css/RoomOptions.module.css"; // Importa el CSS como módulo

const RoomOptions = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate("/create-room"); // Redirige a la vista de creación de sala
  };

  const handleJoinRoom = () => {
    navigate("/join-room"); // Redirige a la vista de unirse a sala
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del almacenamiento local
    navigate("/"); // Redirige a la página principal
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>INICIO</h1>
      <ElegantButton text="CREAR SALA" onClick={handleCreateRoom} />
      <p className={styles.separator}>O</p>
      <ElegantButton text="UNIRSE A UNA SALA" onClick={handleJoinRoom} />
      <LogoutButton onClick={handleLogout} /> {/* Botón estilizado de Log Out */}
    </div>
  );
};

export default RoomOptions;