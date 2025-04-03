import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'; // Importa las rutas de autenticación

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/api', authRoutes); // Registra las rutas de autenticación

app.listen(5000, () => console.log('Server running on port 5000'));