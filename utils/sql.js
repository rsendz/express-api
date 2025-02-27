import sql from 'mssql';

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

const sqlConnect  = async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
};


export { sqlConnect, sql };