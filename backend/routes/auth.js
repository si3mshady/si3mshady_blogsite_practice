const router = require('express').Router();
const User = require('../models/Users')
const bcrypt = require('bcrypt');

//Register 
router.post('/register',async (req,res) => {
        try {
            // resume - https://youtu.be/OML9f6LXUUs?t=1745
            const salt = bcrypt.genSaltSync(saltRounds=8);
            const hash = bcrypt.hashSync(myPlaintextPassword=req.body.password, salt);

         
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password :hash
            })

            const user = await newUser.save()
         res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error);
            
        }

})
//Login a
router.post('/login', async (req, res) => {

    try {

        const user = await User.findOne({username: req.body.username})
        if (!user) {
            return res.status(400).json("Wrong credentials. Please try again.");
        }
        const validate = await bcrypt.compare(myPlaintextPassword=req.body.password, hash=user.password);

        if (!validate) {
            return res.status(400).json("Wrong credential. Please try again.")
        }

        const {password, ...remainingAttributes} = user._doc;   //destructuring 
        return res.status(200).json(remainingAttributes)

    } catch (err) {
        return   res.status(500).json(err);
    }
})




module.exports = router; 