const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const { Calculator } = require('@vaughan189/my-awesome-calculator');
const { add, subtract } = require('@vaughan189/maths-package');


const calculator = new Calculator()

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


app.get("/", (req, res) => {
    res.json({ message: "Server Running on Port 4000"});
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});