// configuração de conexão com o banco de dados
import path from 'path';

export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'db_xp'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),

        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        }
    }
}