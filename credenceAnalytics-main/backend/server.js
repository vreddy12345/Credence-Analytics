const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config file path so that we know port
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
