var mysql = require('mysql');

const conn = mysql.createConnection({
    'host': localhost,
    'user': root,
    'password': password,
    'database': latihanapi
});

conn.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Connected!!')
    }
});

module.exports = conn;

