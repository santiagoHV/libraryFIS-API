module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    migrations: ['src/database/migrations/*.{ts,js}'],
    migrationsTableName: 'migrations',
    entities: ['src/**/*.entity.{ts,js}'],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
    // ssl: {
    //     rejectUnauthorized: false,
    // },
}