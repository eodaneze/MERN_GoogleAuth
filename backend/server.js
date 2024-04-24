const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const Port = process.env.PORT || 5000

app.listen(Port, () => {
     console.log(`server is running on port ${Port}`);
})