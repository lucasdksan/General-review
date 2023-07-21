const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.post("/", (req, res)=>{
    console.log(req.body)
    return res.json({ msn: "Parabéns, Você não é corno!" });
});
app.listen(3009);