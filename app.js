const express=require('express')
require('dotenv/config')
const path=require('path')
const ejs=require('ejs')
const bodyparser=require('body-parser')
const router=require('./routes/routes')

// initialize app
const app=express()

// middlewares

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

//static files
app.use(express.static("public"));

// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// routes
app.use('/',router)




// listening to port
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>console.log(`server started on port :${PORT}`))





