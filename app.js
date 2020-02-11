const express = require('express');
const app = express();



app.use(express.static('public'));


app.use("/", async (req, res) => {
    res.redirect("main.html");


})


app.use("*", async (req, res) => {
    //page 404 not found
})

app.listen(4000, () => {
    console.log('server started');
    console.log("Routes will be running on http://localhost:4000");

});