import React, {useState, useEffect} from 'react'
import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar/>
        </div>
    )
}
// https://youtu.be/tlTdbc5byAs?t=2840