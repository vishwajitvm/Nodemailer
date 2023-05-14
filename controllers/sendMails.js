const nodemailer = require('nodemailer')

const sendMail = async (req , res) => {
    let testAccount = await nodemailer.createTestAccount() ;
    
    //Connect with smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lynn.toy@ethereal.email',
            pass: 'uKxe1sqBHy58RaBDyW'
        }
    });

    let info = await transporter.sendMail({
        from: 'Vishwajit vm <lynn.toy@ethereal.email>',
        to: 'Test vm <testvm43@gmail.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    })

    console.log('Message sent: %s', info.messageId); //we'll message if only
    res.json(info)
}

module.exports = sendMail ;