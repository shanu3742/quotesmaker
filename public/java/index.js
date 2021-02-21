const path = require("path");
const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT||5090;
const app = express();
const root1 = path.join(__dirname,"..");
const partialpath =  path.join(__dirname,"../../parts")
const actualpath = path.join(__dirname,"../../views/main");
app.set("view engine","hbs");
app.set("views",actualpath);
hbs.registerPartials(partialpath);
app.use(express.static(root1));


app.get("/", (req,res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log("done");
})