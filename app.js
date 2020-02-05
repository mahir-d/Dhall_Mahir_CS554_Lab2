const express = require('express');
const app = express();


app.use(express.static('public'));


app.get("/", async (req, res) => {
    res.redirect('main.html');


})


app.use("*", async (req, res) => {
    //page 404 not found
})

app.listen(3000, () => {
    console.log('server started');
    console.log("Routes will be running on http://localhost:3000");

});