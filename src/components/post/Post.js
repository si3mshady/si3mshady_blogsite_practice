import React from 'react'
import './post.css'
import {Link} from 'react-router-dom'

export default function Post({image, post}) {
    // const imgURL = image !== null ? image : url
    
    const imgURL = "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1508806983/photos/263174_original.jpg"
    return (
        <div className="post">
            
           <img 
           className="postImage" alt=""
      
           src={post.photo ? post.photo : imgURL}></img> 

           <div className="postInfo">
               <div className="postCategories">    
                    {post.categories.map(val => (
                        
                        <span className="postCat">{val.name}</span>
                        
                        ))}                                   
                  
               </div>
               <Link to={`post/${post._id}`}>
               <span className="postTitle">  {post.title}  </span>
               </Link>
             
                  
   
               <span className="postDate">
                 1 hour ago.
               </span>
               <p className="postDescription">{post.description} </p>
           </div>

        </div>
    )
}


//date should be    new Date(post.createdAt)