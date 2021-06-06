module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL + "?sslmode=require",
    "ssl": {
        "rejectUnauthorized": false
    },
    "migrations": [
        "./src/database/migrations/**.js"
    ],
    "entities": [
        "./src/entities/**.js"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}