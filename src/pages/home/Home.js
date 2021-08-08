import axios from 'axios'

import React, {useState, useEffect} from 'react'
import Header from  '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Home() {
    const [posts, setPost] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const res = await axios.get('/posts')
            console.log(res.data)
            setPost(res.data)
        }
          

        fetchData()
        


    }, [])

    
    return (
       

        <>
          <Header />
        <div className="home">
        
       
            <Posts posts={posts}/>
            <Sidebar />
         
        </div>
        </>
    )
}
