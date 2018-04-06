import { Router } from 'express';
import items from '../tools/items';

const router = Router();

router.get('/:idx', (req, res) => {
    res.send({
        success: true,
        message: 'SUCCESS',
        item: items.find(i => i.idx === req.params.idx)
    });
})

router.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'SUCCESS',
        items: items
    });
});

export default router;