import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Register from "./pages/Register"; // Importa el componente Register
import RoomOptions from "./pages/RoomOptions"; // Importa la nueva vista
import CreateRoom from "./pages/CreateRoom"; // Importa la nueva vista
import JoinRoom from "./pages/JoinRoom"; // Importa la vista de unirse a una sala
import Room from "./pages/Room"; // Importa la vista de la sala
import GameRoom from "./pages/GameRoom"; // Importa la vista de la sala de juego
import MakeMove from "./pages/MakeMove"; // Importa la vista de realizar movimiento

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/room-options" element={<RoomOptions />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room/:roomCode" element={<Room />} />
        <Route path="/game-room" element={<GameRoom />} /> {/* Nueva ruta */}
        <Route path="/make-move" element={<MakeMove />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
