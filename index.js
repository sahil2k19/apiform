const env = require("dotenv").config();
const express = require("express");
const sequelize = require("./db/connection");
const { formRouter } = require("./routes/Form");
const app = express();
const port = process.env.PORT || 2100;


app.use(express.json());

app.use('/',formRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



sequelize.sync({ alter: true, logging: false }).then(() => {
    console.log("Connection has been established successfully.");
})

