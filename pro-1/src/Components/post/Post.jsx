import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Users} from "../../DummyData.js"
import { useState } from "react";

const Post = ({Post}) => {

  const[like,setLike]= useState(Post.like)
  const[isliked, setisLiked]= useState(false)

  const likeHandler=()=>{
    setLike(isliked? like-1: like+1);
    setisLiked(!isliked)
  }

  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img className="postImg" src={Users.filter(u=>u.id===Post?.userId)[0].profilePicture} alt="" />
            {/* chunki username hamara first element me hai */}
            <span className="postName">{Users.filter(u=>u.id===Post.userId)[0].username}</span>
            <span className="postDate">{Post.date}</span>
          </div>

          <div className="postRight">
            <MoreVertIcon />
          </div>
        </div>


        <div className="postCenter">
            <span className="postText">{Post?.desc}</span>
            <img className="postimg" src={Post.photo} />
        </div>


        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeicon" src="assets/like.png" onClick={likeHandler} alt="" />
                <img className="likeicon"src="assets/heart.png" onClick={likeHandler}  alt="" />
                <span className="likeCounter">{like}</span>
                
            </div>
            <div className="postBottomRight">
                <span className="postComment">{Post.comment}</span>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
