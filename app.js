require('dotenv').config();
const chalk = require('chalk')
const Express = require("express");
const app = Express();
const dbConnection = require('./db');
const middleware = require('./middleware');

app.use(middleware.headers);
const controllers = require('./controllers');
app.use(Express.json());
app.use('/user', controllers.userController);
app.use('/pies', controllers.pieController);

dbConnection.authenticate()
.then(() => {
    dbConnection.sync(); // {force: true} or {alter:true}
    console.log(chalk.greenBright("Database Synced"));
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(chalk.blueBright(`[Server]: App is listening on port ${process.env.PORT}`))
    })
})
.catch((err) => {
    console.log(chalk.redBright(`[Server]: Server Yeeted! ${err}`))
})