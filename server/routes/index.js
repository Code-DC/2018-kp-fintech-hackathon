import express from 'express';
import error from './error';
import user from './user';

const router = express.Router();

router.use('/users', user);
router.use(error);

export default router;