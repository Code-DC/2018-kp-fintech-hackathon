import express from 'express';
import error from './error';
import sign from './sign';
import user from './user';
import product from './product';

const router = express.Router();

router.use('/sign', sign);
router.use('/users', user);
router.use('/products', product);
router.use(error);

export default router;