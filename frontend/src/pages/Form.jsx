import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Form.css";

const Form = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email: formData.email,
                password: formData.password,
            });
            console.log("Login exitoso:", response.data);
            // Guarda el token en el almacenamiento local o en el estado global
            localStorage.setItem("token", response.data.token);
            navigate("/room-options"); // Redirige a otra página después del login
        } catch (error) {
            console.error("Error:", error.response?.data || "Error desconocido");
            setError(error.response?.data?.message || "Error al iniciar sesión");
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Enter your Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button className="button-submit" type="submit">
                    Sign In
                </button>
                <p className="p">
                    Don't have an account?{" "}
                    <a href="/register" className="span">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Form;
