const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const signup_routes = require('./routes/signup');

const sequelize = require('./database/mysql');

const app = Express();
app.use(bodyParser.json({extended:false}));
app.use(cors());
app.use(signup_routes);

sequelize.sync()
.then((result)=>{
app.listen(3000)
})
.catch((err)=>{
console.log(err);
})
