import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareImg" src="./assets/person/1.jpeg" alt="" />
                <input placeholder="What's in your mind Mahmood?" className="shareInput" />
            </div>
            <hr className="shareHr" />

            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareText">Photo or Video</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>


            
            

        </div>
      
    </div>
  )
}

export default Share
