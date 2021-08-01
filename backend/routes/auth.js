const router = require('express').Router();
const User = require('../models/Users')
const bcrype = require('bcrypt');

//Register 
router.post('/register',async (req,res) => {
        try {
            // const salt = await bcrypt.genSalt(1);
            // const hashedPass = await bcrypt.hash(req.body.password, salt)
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password :req.body.password
            })

            const user = await newUser.save()
         res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error);
            
        }

})
//Login 




module.exports = router; 