const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    console.log(req.body.user)
    res.send("login success");
});

app.listen(3000, () => console.log("server started"));
