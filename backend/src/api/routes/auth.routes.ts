import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Register user placeholder' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login placeholder' });
});

export default router;
  