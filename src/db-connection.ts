import { Sequelize } from "sequelize";
const sequelize = new Sequelize('task-manager', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (...msg) => console.log("I am Happily Connected With mysql using Sequalize"),
});


const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDb()