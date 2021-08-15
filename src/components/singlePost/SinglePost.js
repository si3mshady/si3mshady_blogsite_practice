import './singlePost.css'
import axios from 'axios'
import {Context} from  '../../context/Context'
import React, {useEffect, useContext, useState} from 'react'
import {useLocation, Link} from 'react-router-dom';



export default function SinglePost() {

    const loc = useLocation()
    const path = loc.pathname.split('/')[2] // the post id is located in url, required to fetch post
    const [post, setPost] = useState({})
    const {user} = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')    
    const [updateMode, setUpdateMode] = useState(false)
    
    


    useEffect(() => {
        const getPost = async () => {
            axios.get('/posts/' + path)
            .then(data => {
                setPost(data.data)
                setTitle(data.title)
                setDesc(data.description)
                // console.log(data)
            })
        }

        getPost()
    },[path])
        

    const handleDelete = async () => {

        try { 
            console.log(path)
        await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
        window.location.replace('/');
    
    
        } catch(error) {

            console.log(error)

        }


     
    }


    const handleUpdate = async () => {

        try { 
            console.log(path)
        await axios.put(`/posts/${post._id}`, {username:user.username, title:title, description:desc});
            setUpdateMode(false)
    
        } catch(error) {

            console.log(error)

        }
    }


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src= { post.photo ? 'http://localhost:5000/images/' + post.photo : "https://media-exp1.licdn.com/dms/image/C5622AQEJa2_x5T8O5g/feedshare-shrink_1280/0/1625956191270?e=1629936000&v=beta&t=HgWrY_9t9RnBKv9g0YQxAq9LfIBKVKbo0Eem7wrvtBA"} 
                    className="singlePostImg"
                />

                {updateMode? <input autoFocus onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput"></input>: (
  <h1 className="singlePostTitle">
  {title} 
  {post.username === user.username && (            

       <div className="singlePostEdit">
       <i class="singlePostIcon fas fa-edit"onClick={()=> setUpdateMode(true)} ></i>
       <i class="singlePostIcon fa fa-trash" onClick={handleDelete}></i>
       </div>

  )} 

 
</h1>



                )}

             
               <div className="singlePostInfo">
                   <span className="singlePostAuthor"> Author:
                   
                   <Link className="link" to={`/?username=${post.username}`}>    <b>{post.username}</b> </Link>
                   
                 </span>
                   <span className="singlePostDate"> 1hr. ago</span>
               </div>

               {updateMode ? <textarea className="singlePostDescriptionInput" value={desc} onChange={(e) => setDesc(e.target.value) } />:  
               
               <p className="singlePostDescription">
                  {desc}
                  
               </p>
               
              
               }
                {updateMode &&      <button onClick={handleUpdate} className="singlePostButton">Update</button> }
              

              
           
            </div>
            
        </div>
    )
}
