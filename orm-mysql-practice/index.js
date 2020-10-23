const express = require('express');
const Sequelize = require('sequelize');
const Auth = require('./auth')
const app = express();
const port = 3000;

app.get('/',(req, res) => res.send('orm-mysql-practice'));

app.listen(port, () => console.log(`orm-mysql-practice listening on port ${port}`))


const sequelize = new Sequelize(Auth.database, Auth.userName, Auth.password,{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;


