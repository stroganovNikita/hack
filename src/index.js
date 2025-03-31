const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => console.log('Server listen on port 3000'))