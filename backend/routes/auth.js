import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Simulación de autenticación
  if (email === 'test@example.com' && password === 'password123') {
    return res.status(200).json({ message: 'Login exitoso', token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Credenciales inválidas' });
    console.log('Credenciales inválidas');
  }
});

export default router;