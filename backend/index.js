const express =  require('express');
const app = express();
const authRoute = require('./routes/auth.js')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const catgeoryRoute = require('./routes/categories')
const mongoose = require('mongoose')
const multer = require('multer')





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

const local_storage = multer.diskStorage({

    destination:(req,file,callback) => {
        callback(null, "images")},
        
        filename: (req,file,callback) => {
            callback(null, req.body.name)
        
    },
})


const upload = multer({storage:local_storage })
app.use('/api/upload', upload.single("file"), (req,res) => {
    return res.status(200).json("File has been uploaded")
})
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/category', catgeoryRoute)

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})