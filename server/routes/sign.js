import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import constants from '../config/constants';
import User from '../database/models/User';
import { filter } from '../tools/authentication';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const user = (await User.login(req.body.username, req.body.password))[0];
        if (!user) {
            throw new Error('이메일 혹은 암호가 일치하지 않습니다.');
        }
        const token = sign({ id: user._id }, constants.JWT_SALT);
        return res.send({
            success: true,
            message: 'SUCCESS',
            token,
            user
        });
    } catch ({ message }) {
        return res.status(400).send({
            success: false,
            message
        });
    }

});

router.get('/me', filter, async (req, res) => {

    try {

        const user = await User.findById(req.user.id);
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