import express from 'express';
import error from './error';

const router = express.Router();

router.use(error);

export default router;