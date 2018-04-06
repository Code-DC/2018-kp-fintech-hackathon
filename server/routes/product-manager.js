import { Router } from 'express';
import User from '../database/models/User';
import Product from '../database/models/Product';
import ProductManager from '../database/models/ProductManager';
import { checkProperty } from '../tools/validator';
import { filter } from '../tools/authentication';

const router = Router();

router.post('/:productId', filter, async (req, res) => {
    try {
        const data = checkProperty(req.body, 'manager', true);
        if (data.message !== 'SUCCESS') {
            throw new Error(data.message);
        }
        const user = await User.findById(req.user.id);
        if (user.accountAmount < data.data.amount) {
            throw new Error('출금 계좌의 금액이 부족합니다.');
        }
        user.accountAmount -= data.data.amount;
        user.save();
        const managerInfo = {
            ...data.data,
            user: req.user.id,
            product: req.params.productId
        };
        const manager = await ProductManager.findById((await ProductManager.create(managerInfo))._id);
        return res.send({
            success: true,
            message: 'SUCCESS',
            manager
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
        const manager = await ProductManager.findById(req.params.id);
        return res.send({
            success: true,
            message: 'SUCCESS',
            manager
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
        const { limit, offset, user } = req.query;
        if (!(limit && offset)) {
            throw new Error('LIMIT_OR_OFFSET_NOT_EXIST');
        }
        const managers = await ProductManager.find()
            .where('user', user)
            .limit(Number(limit))
            .skip(Number(offset));
        return res.send({
            success: true,
            message: 'SUCCESS',
            managers
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

router.put('/next-month/:id', filter, async (req, res) => {
    try {
        const manager = await ProductManager.findById(req.params.id);
        if (!manager) {
            throw new Error('존재하지 않는 계약입니다.');
        }
        const product = await Product.findById(manager.product);
        if (!product) {
            throw new Error('존재하지 않는 상품입니다.');
        }
        manager.amount += (manager.amount * product.profitRate);
        await manager.save();
        return res.send({
            success: true,
            message: 'SUCCESS',
            manager
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

router.put('/salary/:id', filter, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            throw new Error('존재하지 않는 계정입니다.');
        }
        const manager = await ProductManager.findById(req.params.id);
        if (!manager) {
            throw new Error('존재하지 않는 계약입니다.');
        }
        user.accountAmount += manager.incomeAmount;
        await user.save();
        return res.send({
            success: true,
            message: 'SUCCESS',
            manager,
            user
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

router.put('/withdraw/:id', filter, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            throw new Error('존재하지 않는 계정입니다.');
        }
        const manager = await ProductManager.findById(req.params.id);
        if (!manager) {
            throw new Error('존재하지 않는 계약입니다.');
        }
        if (user.accountAmount - manager.amountTransferred < 0) {
            throw new Error('출금 계좌의 금액이 부족합니다.');
        }
        user.accountAmount -= manager.amountTransferred;
        manager.amount += manager.amountTransferred;
        await user.save();
        await manager.save();
        return res.send({
            success: true,
            message: 'SUCCESS',
            manager,
            user
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }
});

export default router;