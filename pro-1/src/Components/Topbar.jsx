import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Navbar here 

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>MdSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                < SearchIcon className='searchIcon'/>
                <input placeholder='search for friend, post or videos' className='searchInput' />
            </div>
        </div>



        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIcon">
                    <PersonIcon/>
                    <span className='topbarBage'>1</span>
                </div>
                <div className="topbarIcon">
                    <ChatIcon/>
                    <span className='topbarBage'>2</span>
                </div>
                <div className="topbarIcon">
                    <NotificationsIcon/>
                    <span className='topbarBage'>3</span>
                </div>

            </div>

            <img src="./assets/person/1.jpeg" alt="" className='topbarImg' />


        </div>


       
    </div>
  )
}

export default Topbar


