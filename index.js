const express = require('express');
const app = express();
const cors = require('cors');
// const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser())

app.post('/', (req, res) => {
    // console.log(req.body)
    // console.log(req.cookies)
    console.log(req)
})

app.listen(3000, () => console.log('Server listen on port 3000'))