const router = require('express').Router();
const User = require('../models/Users')
const Post = require('../models/Post')

const bcrypt = require('bcrypt');


//Update 
router.put('/:id',async (req,res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {

            const salt = bcrypt.genSaltSync(saltRounds=8);
            req.body.password = await bcrypt.hashSync(myPlaintextPassword=req.body.password, salt);
  
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})

            return res.status(200).json(updatedUser)      
        
            
        } catch(err) {
            return   res.status(500).json(err);
        }
    }

    else {
        return   res.status(401).json("You can only update your own account");
    }     
                
    }
    )
       
//Delete
router.delete('/:id',async (req,res) => {
    if (req.body.userId === req.params.id) {

        try {
            const user = await  User.findById(req.params.id)
                 
        try {
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json(`${req.body.userName} has been deleted!`)              
            
        } catch(err) {
            console.log(err)
            return   res.status(500).json(err);
        }


        } catch (err) {

            return   res.status(404).json("User not found!");

        }

     
    }

    else {
        return   res.status(401).json("You can only delete your own account");
    }     
                
    }
    )

//GET 
router.get('/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const  {password, _id, ...others} = user._doc
        return res.status(200).json(others)

    } catch (err) {

        return res.status(500).json(err)
    }
 

} )



module.exports = router; 