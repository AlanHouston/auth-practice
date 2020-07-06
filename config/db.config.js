module.exports = {
    HOST: 'den1.mysql1.gear.host',
    USER: 'authpractice',
    PASSWORD: "auth!!",
    DB: "authpractice",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};