
const Online = ({user}) => {
  return (
    <li className='rightbarFriend'>
            <div className="rightBarImgContainer">
              <img className='rightbarImg' src={user.profilePicture} alt="" />

              <span className='rightBarOnline'></span>
            </div>

            <span className='rightbarUser'>{user.username}</span>

          </li>
  )
}

export default Online
