import { Router } from 'express';
import authRoutes from './auth.routes';
import postRoutes from './post.routes';
import suggestionRoutes from './suggestion.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/suggestions', suggestionRoutes);

export default router;
  