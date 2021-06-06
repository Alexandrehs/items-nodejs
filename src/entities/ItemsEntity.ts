import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('items')
class ItemsEntity {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "price" })
    price: string;

    @Column({ name: "storage" })
    storage: number;

    @Column({ name: "minimum" })
    minimum: number;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        console.log(this.id);
    }
}

export { ItemsEntity };