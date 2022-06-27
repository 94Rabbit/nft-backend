const mysql = require('serverless-mysql')({
    config: {
      host     : 'sql8.freemysqlhosting.net',
      database : 'sql8502529',
      user     : 'sql8502529',
      password : 'tC3qyE6NWV'
    }
  })
const sql = `create table users (name varchar(24))`;
const test = `show tables`;
mysql.query(test).then(res=>{
    console.log(res);
});