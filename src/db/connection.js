//db configuration
const Pool = require("pg").Pool;
const mydb = new Pool({
user: "postgres",
host: "localhost",
database: "mydb",
password: "root",
port: 5432
});

const getUsers =(req,res) =>{
    console.log("Connectign to database");
    mydb.query("SELECT * FROM users",(error,result) =>{
        if(error){
            throw error;
        }
        res.json(result.rows);
    })
}


module.exports = mydb;