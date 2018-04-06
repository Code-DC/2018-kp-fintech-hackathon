import { Router } from 'express';
import Product from '../database/models/Product';
import { checkProperty } from '../tools/validator';
import accountNumber from '../tools/account-number';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const data = checkProperty(req.body, 'product', true);
        if (data.message !== 'SUCCESS') {
            throw new Error(data.message);
        }
        const productInfo = data.data;
        productInfo.profitRate = Number(productInfo.profitRate);
        const product = await Product.create(productInfo);
        return res.send({
            success: true,
            message: 'SUCCESS',
            product
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.send({
            success: true,
            message: 'SUCCESS',
            product
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const { limit, offset } = req.query;
        if (!(limit && offset)) {
            throw new Error('LIMIT_OR_OFFSET_NOT_EXIST');
        }
        const products = await Product.find()
            .limit(Number(limit))
            .skip(Number(offset));
        return res.send({
            success: true,
            message: 'SUCCESS',
            products
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
})

export default router;