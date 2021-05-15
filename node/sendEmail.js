const express = require('express')
//const mandrill = require('node-mandrill')('ZLxs4qXLVHBby4gW3owXbA')
const router = express.Router()
const nodemailer = require("nodemailer");


router.get('/' ,async(req,res) =>{
    res.send("dsadsad");
})

router.post('/',async (req, res)=>{
try{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: "jomaikata@gmail.com",
          pass: "jomaikata5", 
        },
      });

      let info = await transporter.sendMail({
        from: 'jomaikata@gmail.com', 
        to: "mmanolovvv@gmail.com", 
        subject: `${req.body.subject}`, 
        text: `${req.body.message}` + "\n\n\n" +"EMAIL: "+ `${req.body.email}`,
      });
      console.log("Message sent: %s", info.messageId);
    }
    catch(error){
        console.log(error)
    }
    res.send("sent")

})

module.exports = router;