import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../../data.js'

export default function (req: NextApiRequest, res: NextApiResponse ) {
    const method = req.method
    const product = req.body
    switch (method) {
        case 'GET':
            res.status(200).json(products)
            break;
        case 'POST':
            res.status(201).json({ 
                size: product.size,
                price: product.price,
                points: product.points,
            });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);

    }
    try { 
        
    }catch(err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}