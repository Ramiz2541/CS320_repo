const express = require('express')
const mysql = require('mysql')


//create database 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

//connect to mysql
db.connect(err => {
    if(err) {
        throw err
    }
    console.log('MySql Connection successful')
})

const app = express()

//Create the database
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('database created')
    })
})

//create table
app.get('/createUser', (req, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('User table created')
    })
})


//insert user 1
app.get('/user1', (req, res) => {
    let post = {name: 'Nomad'}
    let sql = 'INSERT INTO user SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('user added to database')
    })
})

//select user from database
app.get('/getUserCredentials', (req, res) => {
    let sql = 'SELECT * FROM user'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('users in the database')
    })
})

//update user info in table
app.get('/UpdateInfo/:id', (req, res) => {
    let NewUsername = 'updated username'
    let sql = `UPDATE user SET name = '${NewUsername}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('users updated in the database')
    })
})

//delete user from database
app.get('/deleteUser/:id', (req, res) => {
    let sql = `DELETE FROM user WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('user deleted from the database')
    })
})


app.listen('3000', () => {
    console.log('server started on port 3000')
})