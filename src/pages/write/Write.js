import React, {useState, useEffect, useContext} from 'react'
import {Context} from  '../../context/Context'
import './write.css'
import axios from 'axios'
import neonGas from '../../images/neonGas.png'
export default function Write() {


    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
        };
        if (file) {
            const data =  new FormData()
            const filename = file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename;

            try {
               await axios.post("/upload", data)
            } catch(err) {
                    console.log(err)
            }
        } 

        try {

            const res  = await axios.post("/posts/newPost", newPost)
            window.location.replace("/post/" + res.data._id)

        } catch(err) {

            console.log(err)

        }


    }
    return (
        <div className="write">

            {file && (
                <img className="writeImage" src={URL.createObjectURL(file)} alt=""/>

              
            
            )}




         
            <form onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file"  onChange={(e) => {setFile(e.target.files[0]); console.log(e.target.files[0].name)} } id="fileInput" style={{display:"none"}} />
                    <input type="text"
                    
                    onChange={(e) => setTitle(e.target.value) }
                    placeholder="Title"className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea  onChange={(e) => setDesc(e.target.value) } placeholder="Tell your story..."
                     className="writeInput writeText" ></textarea>
                </div>
                <button type="submit" className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
