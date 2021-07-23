import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://media-exp1.licdn.com/dms/image/C5622AQEJa2_x5T8O5g/feedshare-shrink_1280/0/1625956191270?e=1629936000&v=beta&t=HgWrY_9t9RnBKv9g0YQxAq9LfIBKVKbo0Eem7wrvtBA" 
                    className="singlePostImg"
                />
               <h1 className="singlePostTitle">
                   lorem ipsum dolor sit amet, consectet
                   <div className="singlePostEdit">
                        <i class="singlePostIcon fas fa-edit"></i>
                        <i class="singlePostIcon fa fa-trash"></i>
                   </div>
                  
               </h1>
               <div className="singlePostInfo">
                   <span className="singlePostAuthor"> Author: <b>Elliott</b></span>
                   <span className="singlePostDate"> 1hr. ago</span>
               </div>
               <p className="singlePostDescription">
                   lorem ipsm lorem ipsm  lorem ipsm lorem ipsm lorem ipsm  lorem ipsm 
                   lorem loremlorem lorem lorem ipsm lorem ipsm lorem ipsm lorem ipsm lorem ipsm  lorem ipsm 
                   lorem loremlorem lorem lorem ipsm lorem ipsm  lorem ipsm lorem ipsm lorem ipsm  lorem ipsm 
                   lorem loremlorem lorem lorem ipsm lorem ipsm  lorem ipsm lorem ipsm lorem ipsm  lorem ipsm 
                   lorem loremlorem loremlorem ipsm lorem ipsm  lorem ipsm lorem ipsm lorem ipsm  lorem ipsm 
                   lorem loremlorem lorem
               </p>
            </div>
            
        </div>
    )
}
