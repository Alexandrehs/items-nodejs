module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "extras": {
        "ssl": "true"
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