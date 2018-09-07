import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'bootstrap';
import 'popper.js';
import $ from 'jquery';

import {User, sequelize} from './datastore';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


// User.create({
//     username: 'janedoe',
//     password: 'password'
//   })
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

User.findAll().then(function(result) {
  console.log('afff', result);
});

// const path = require('path')
// const dbPath = path.resolve(__dirname, 'todo.db')

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(dbPath);
//
// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
//
//   // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   // for (var i = 0; i < 10; i++) {
//   //   stmt.run("Ipsum " + i);
//   // }
//   // stmt.finalize();
//
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     console.log(row.id + ": " + row.info);
//   });
//
// });
//
// db.close();

