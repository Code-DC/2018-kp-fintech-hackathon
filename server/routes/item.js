import { Router } from 'express';
import itemlist from '../tools/items';

const router = Router();

router.get('/:idx', (req, res) => {
    res.send({
        success: true,
        message: 'SUCCESS',
        item: itemlist.find(i => i.idx.toString() === req.params.idx)
    });
})

router.get('/', (req, res) => {
    const { price } = req.query;
    const items = price ? itemlist.filter(i => Math.floor(i.price / 10000) === Number(price)) : itemlist;
    res.send({
        success: true,
        message: 'SUCCESS',
        items
    });
});

export default router;