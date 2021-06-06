import { getCustomRepository } from "typeorm";
import { ItemsRepository } from "../repositories/ItemsRepositoy";

interface IItemProps {
    name: string;
    price: string;
    storage: number;
    minimum: number;
}

class ItemsService {
    async create({
        name,
        price,
        storage,
        minimum
    }: IItemProps): Promise<string> {
        const itemsRepository = getCustomRepository(ItemsRepository);

        try {
            const itemExists = await itemsRepository.findOne(name);

            if (itemExists) {
                throw new Error('Item já existe');
            }
            const item = itemsRepository.create({
                name,
                price,
                storage,
                minimum
            });

            const itemSaved = await itemsRepository.save(item);

            return itemSaved.id;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getItems(): Promise<IItemProps[]> {
        const itemsRepository = getCustomRepository(ItemsRepository);
        const allItems = await itemsRepository.find();

        return allItems;
    }
}

export { ItemsService };