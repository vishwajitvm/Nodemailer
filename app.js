const express = require('express') ;
const app = express() ;
const sendMail = require('./controllers/sendMails')
const PORT = 5000 ;

//ROUTES
app.get('/' , (req , res) => {
    res.send("I am a server") ;
}) ;

app.get('/mail' , sendMail) ;

const start = async () => {
    try {
        app.listen(PORT , () => {
            console.log(`I am live on Port No. ${PORT}`);
        })
    } catch (error) {
        
    }
}

start() ;