const router = require('express').Router();
const User = require('../models/Users')
const Post = require('../models/Post')

const bcrypt = require('bcrypt');


//Create 
router.post('/newPost',async (req,res) => {
     const newPost = new Post(req.body)      
     console.log(req.body)

     try {
            const savedPost = await newPost.save()
            return  res.status(200).json(savedPost)
     } catch (err) {
        console.log('There was a problem creating the post')
        return res.status(500).json(err)
     }
    }
    )
       
//Update Post
router.put('/:id',async (req,res) => {

     try {
        const post = await Post.findById(req.params.id)
        // res.status(200).json(post)

        if (post.username === req.body.username ) {
            try {
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set: req.body 
                    }, {new:true})

                    return  res.status(200).json(updatedPost)

            } catch (err) {}

        } else {

            return res.status(401).json("You can only update your post!")
        }
      

 } catch (err) {

    return res.status(500).json(err)
 }

}    
    )

//Delete 
router.delete('/:id',async (req,res) => {

    try {
       const post = await Post.findById(req.params.id)
       // res.status(200).json(post)

       if (post.username === req.body.username ) {
           try {
                   post.delete()
                   return  res.status(200).json("Post has been deleted")

           } catch (err) {}

       } else {

           return res.status(401).json("You can only delete your post!")
       }
     

} catch (err) {

   return res.status(500).json(err)
}

}    
   )


//Get single post


router.get('/:id',async (req,res) => {

    try {
       const post = await Post.findById(req.params.id)
       // res.status(200).json(post)
       return  res.status(200).json(post)

     

} catch (err) {

   return res.status(500).json(err)
}

}    
   )


// get all posts



router.get('/',async (req,res) => {
    //parsing url for query strings which contain data to exec searches. 
    const username = req.query.username 
    const category_name = req.query.category
    try {

    let posts;
    if (username ) {
          // return posts of single user 
        posts = await Post.find({username})
        return  res.status(200).json(posts)

    } else if (category_name) {
        // return posts of single category 
    posts = await Post.find({categories: {
        $in: [category_name]
    } })

    return  res.status(200).json(posts)




    }

    else {
        // return all posts 
        const allPosts = await Post.find()

        return  res.status(200).json(allPosts)

    }



      

     
} catch (err) {
    console.log(err)
   return res.status(500).json(err)
}

}    
   )

module.exports = router; 