process.env.HOST = 'den1.mysql1.gear.host';
process.env.USER = 'authpractice';
process.env.PASSWORD = "auth!!";

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: "authpractice",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};