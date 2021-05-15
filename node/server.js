const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())
const port = 2666;

const emailSender = require("./sendEmail");
app.use(emailSender);

app.listen(port, () => {
    console.log("STARTEDDD")
})