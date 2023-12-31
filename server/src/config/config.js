module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'nwWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        option: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebblog-db.sqlite' 
        },
    }
}