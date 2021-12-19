const express=require('express')
const router=express.Router()
const axios=require('axios')
const conn=require('../database/db_conn')

router.get('/',(req,res)=>{
    axios.get('http://localhost:3000/api-students').then((response)=>{
        res.render('home',{"students":response.data})
    })
  

})



router.get('/add',(req,res)=>{
    res.render('add')
})

// apis ....................

router.get('/api-students',(req,res)=>{
    conn.query('SELECT * FROM students',(err,results)=>{
        if(err) throw err
        res.send(results)
    })
})

router.post('/submit',(req,res)=>{
    const params=req.body
    conn.query('INSERT INTO students set ?',params,(err,rows)=>{
        if(!err){
            res.redirect('/')
            console.log("inserted successfully")
        }else{
            console.log(err)
        }
    })  
})





module.exports=router