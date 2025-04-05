import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("Datos del formulario:", {
            firstName,
            lastName,
            email,
            password,
        });
    };

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex-column">
                    <label>Nombre(s)</label>
                </div>
                <div className="inputForm">
                    <input
                        type="text"
                        name="firstName"
                        className="input"
                        placeholder="Ingresa tu nombre"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Ingresa tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Contraseña</label>
                </div>
                <div className="inputForm">
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Crea una contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Confirmar Contraseña</label>
                </div>
                <div className="inputForm">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="input"
                        placeholder="Confirma tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="button-submit" type="submit">Registrarse</button>
                <p className="p">
                    You have an account?{" "}
                    <Link to="/login" className="span">Login</Link>{" "}
                </p>
            </form>
        </div>
    );
};

export default Register;
