const Sequelize = require('sequelize');
// var sequelize = new Sequelize('mainDB', null, null, {
//   dialect: "sqlite",
//   storage: dbPath,
// });

const path = require('path')
const dbPath = path.resolve(__dirname, 'barcode.db')

const sequelize = new Sequelize('mainDB', null, null, {
  dialect: "sqlite",
  storage: dbPath,
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


export const User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

export default sequelize;

//
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

//  MODELS


//  SYNC SCHEMA
// sequelize
//   .sync({ force: true })
//   .then(function(err) {
//     console.log('It worked!');
//   }, function (err) {
//     console.log('An error occurred while creating the table:', err);
//   });


// User.findAll().then(function(result){
//   console.log(result);
// });

