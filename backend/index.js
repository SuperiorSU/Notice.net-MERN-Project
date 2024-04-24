const express = require('express')
const app = express();

require('dotenv').config();
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/api/v1', require('./routes/main'));
const dbConnect = require('./config/database');
dbConnect();

app.listen(process.env.PORT||5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
