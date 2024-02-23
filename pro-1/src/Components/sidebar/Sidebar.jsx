import React from 'react'
import './sidebar.css'
import RssFeed from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../DummyData';
import CloseFriend from '../closefriends/CloseFriend';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sideWrapper">
        <ul className='sideList'>
          <li className='listItem'>
            <RssFeed className='sideIcon'/>
            <span className='listItemText'>feed</span>
          </li>

          <li className="listItem">
            <ChatIcon className="sideIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="listItem">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <span className="listItemText">Videos</span>
          </li>
          <li className="listItem">
            <GroupIcon className="sideIcon" />
            <span className="listItemText">Groups</span>
          </li>
          <li className="listItem">
            <BookmarkIcon className="sideIcon" />
            <span className="listItemText">Bookmarks</span>
          </li>
          <li className="listItem">
            <HelpOutlineIcon className="sideIcon" />
            <span className="listItemText">Questions</span>
          </li>
          <li className="listItem">
            <WorkOutlineIcon className="sideIcon" />
            <span className="listItemText">Jobs</span>
          </li>
          <li className="listItem">
            <EventIcon className="sideIcon" />
            <span className="listItemText">Events</span>
          </li>
          <li className="listItem">
            <SchoolIcon className="sideIcon" />
            <span className="listItemText">Courses</span>
          </li>


        </ul>

        <button className='sideButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='FriendList'>

          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
          
          {/* <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li> */}




          {/* <li className='sideFriend'> */}
            {/* <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li>
          <li className='sideFriend'>
            <img className='friendImg' src="./assets/person/2.jpeg" alt="" />
            <span className='friendName'>Jane Doe</span>

          </li> */}

        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar
