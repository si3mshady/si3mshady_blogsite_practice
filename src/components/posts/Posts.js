import './posts.css'
import React, {useState, useEffect} from 'react'
import Post from '../post/Post'

export default function Posts() {
    return (
        <div className="posts">
            <Post/>            
            <Post/>   
            <Post/>   
            <Post/>   
            <Post/>   
        </div>
    )
}
