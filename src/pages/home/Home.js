import axios from 'axios'
import {useLocation} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Header from  '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Home() {
    const [posts, setPost] = useState([])
    const {search} = useLocation()  //grabs the query strings if there are any

    useEffect(() => {

        const fetchData = async () => {

            const res = await axios.get('/posts' + search)
            console.log(res.data)
            setPost(res.data)
        }
          

        fetchData()
        


    }, [search])

    
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
