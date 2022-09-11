const exp = require('express');
const mysql = require('mysql');
const cors = require('cors');

const run = exp();
run.use(cors());
run.use(exp.json());

const way = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Nandha@10799',
    database : 'crud_prac'
});

way.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("DataBase Connected")
    }
});

run.get('/',(req,res) => {
    way.query("select * from crudapp",(err,result) => {
        if(err){
            res.send(err);
        }
        else{
            
            res.send(result);
        }
    });
});

run.post('/read',(req,res) => {
    let firstname = req.body.Firstname;
    let lastname = req.body.Lastname;
    let email = req.body.Email;
    let phonenumber = req.body.Phonenumber;
    let city = req.body.City;

    way.query("insert into crudapp(firstname,lastname,email,phonenumber,city)values(?,?,?,?,?)",[firstname,lastname,email,phonenumber,city],(err,result) => {
        if(err){
            let s = {'status' : 'error'}
            res.send(s);
        }
        else{
            let s = {'status' : 'inserted'}
            res.send(s);
        }
    })
})

run.get('/getcrud/:id',(req,res) => {
    const {id} = req.params;
    way.query("select * from crudapp where id=?",[id],(err,result) => {
        res.send(result);
    })
});

run.post('/update',(req,res) => {
    const id = req.body.Id;
    const firstname = req.body.Firstname;
    const lastname = req.body.Lastname;
    const email = req.body.Email;
    const phonenumber = req.body.Phonenumber;
    const city = req.body.City;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    
    way.query("update crudapp set firstname=?,lastname=?,email=?,phonenumber=?,city=? where id=?",[firstname,lastname,email,phonenumber,city,id],(error,result) => {
        if(error){
            let s = {'status' : 'error'}
            res.send(s);
            console.log(error);
        }
        else{
            let s = {'status' : 'Updated'}
            res.send(s);
        }
    })
});

run.delete('/delete/:id',(req,res) => {
    const {id} = req.params;
    way.query("delete from crudapp where id=?",[id],(err,result) => {
        res.send(result);
    })
});

run.listen(3004);