import { Router } from 'express';
import User from '../database/models/User';
import { checkProperty } from '../tools/validator';
import accountNumber from '../tools/account-number';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const data = checkProperty(req.body, 'user', true);
        if (data.message !== 'SUCCESS') {
            throw new Error(data.message);
        }
        const userInfo = data.data;
        userInfo.accountNumber = accountNumber();
        const user = await User.create(userInfo);
        return res.send({
            success: true,
            message: 'SUCCESS',
            user
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
        const user = await User.findById(req.params.id);
        return res.send({
            success: true,
            message: 'SUCCESS',
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