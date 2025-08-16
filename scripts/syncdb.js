import  sequelize from "../config/sequelize.js";
import  User from "../models/User.js";

async function syncDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync all models
    await sequelize.sync({ force: true }); 
    // ⚠️ force: true will drop table if exists and recreate
    console.log("All tables synced successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

syncDB();
