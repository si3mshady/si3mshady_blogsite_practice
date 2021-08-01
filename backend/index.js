const express =  require('express');
const app = express();
const authRoute = require('./routes/auth.js')
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true,
useUnifiedTopology: true, useCreateIndex: true
}, (err) => {
    if (!err) {
        console.log('Connected to Database')
    }
    else {
        console.log('Not connected to database')
    }
});


app.use('/api/auth', authRoute)

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})