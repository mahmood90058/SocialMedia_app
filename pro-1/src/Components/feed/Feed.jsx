import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../DummyData.js"

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/> */}
        {Posts.map((p)=>(
          <Post key={p.id}  Post={p} />
        ))}


      </div>
      
    </div>
  )
}

export default Feed
