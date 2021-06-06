import { EntityRepository, Repository } from "typeorm";
import { ItemsEntity } from "../entities/ItemsEntity";

@EntityRepository(ItemsEntity)
class ItemsRepository extends Repository<ItemsEntity> {

}

export { ItemsRepository };