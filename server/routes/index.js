import express from 'express';
import error from './error';
import sign from './sign';
import user from './user';
import product from './product';
import productManager from './product-manager';
import item from './item';

const router = express.Router();

router.use('/sign', sign);
router.use('/users', user);
router.use('/products', product);
router.use('/product-managers', productManager);
router.use('/items', item);
router.use(error);

export default router;