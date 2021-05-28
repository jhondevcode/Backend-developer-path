import { Router, Request, Response } from "express";

const router = Router();

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "microphone" }
];

router.get('/products', (req: Request, res: Response) => {
    res.json(products);
});

router.post('/products', (req: Request, res: Response) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;
