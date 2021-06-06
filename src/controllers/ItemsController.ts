import { Request, Response } from 'express';
import { ItemsService } from '../services/ItemsService';

class ItemsController {
    async create(request: Request, response: Response): Promise<Response> {
        const {
            name,
            price,
            storage,
            minimum
        } = request.body;

        try {

            const itemService = new ItemsService();
            const item = await itemService.create({
                name,
                price,
                storage,
                minimum
            });

            return response.json({
                item
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    test() {
        console.log('poxa abestadu funciona ne!!');
    }
}

export { ItemsController };