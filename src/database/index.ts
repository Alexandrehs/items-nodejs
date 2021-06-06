import { createConnection } from 'typeorm';

try {
    createConnection();
} catch (error) {
    throw new Error(error);
}