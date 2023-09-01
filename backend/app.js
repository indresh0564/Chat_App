const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./database/mysql');

const signup_routes = require('./routes/signup');
const login_routes = require('./routes/login');
const message_routes = require('./routes/message');
const app = Express();

app.use(cors({
    origin:"*",
}));

app.use(bodyParser.json({extended:false}));
app.use(signup_routes);
app.use(login_routes);
app.use(message_routes);

sequelize.sync()
.then((result)=>{
app.listen(3000)
})
.catch((err)=>{
console.log(err);
})
