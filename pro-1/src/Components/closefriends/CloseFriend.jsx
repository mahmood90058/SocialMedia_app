import React from 'react'

const CloseFriend = ({user}) => {
  return (
    <li className='sideFriend'>
    <img className='friendImg' src={user.profilePicture} alt="" />
    <span className='friendName'>{user.username}</span>

  </li>
  )
}

export default CloseFriend
