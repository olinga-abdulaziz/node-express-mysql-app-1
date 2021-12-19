const mysql=require('mysql')

const conn=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"

})

conn.connect((err,connection)=>{
    if(err) throw err
    console.log('connected to mysql database ...')
})

module.exports=conn