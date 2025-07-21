import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all posts placeholder' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create post placeholder' });
});

export default router;
  