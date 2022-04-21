import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Report, WorkOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebar_Menu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to={'/'} className="link">
                        <li className='sidebarItem'>
                            <LineStyleIcon className='sidebarIcon' />
                            Home 
                        </li>
                    </Link>
                    <li className='sidebarItem'>
                        <TimelineIcon className='sidebarIcon' />
                        Analytics 
                    </li>
                    <li className='sidebarItem'>
                        <TrendingUpIcon className='sidebarIcon' />
                        Sales 
                    </li>
                </ul>
            </div>
            <div className='sidebar_Menu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to={'/users'} className="link">
                        <li className='sidebarItem'>
                            <GroupIcon className='sidebarIcon' />
                            User 
                        </li>
                    </Link>
                    <Link to={'/products'} className='link'>
                        <li className='sidebarItem'>
                            <Inventory2OutlinedIcon className='sidebarIcon' />
                            Products 
                        </li>
                    </Link>
                    <li className='sidebarItem'>
                        <AttachMoneyIcon className='sidebarIcon' />
                        Transactions 
                    </li>
                    <li className='sidebarItem'>
                        <BarChartIcon className='sidebarIcon' />
                        Reposts 
                    </li>
                </ul>
            </div>
            <div className='sidebar_Menu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarItem'>
                        <EmailOutlinedIcon className='sidebarIcon' />
                        Email 
                    </li>
                    <li className='sidebarItem'>
                        <DynamicFeedOutlinedIcon className='sidebarIcon' />
                        Feedback  
                    </li>
                    <li className='sidebarItem'>
                        <ChatBubbleOutlineOutlinedIcon className='sidebarIcon' />
                        Messages 
                    </li>
                </ul>
            </div>
            <div className='sidebar_Menu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarItem'>
                        <WorkOutline className='sidebarIcon' />
                        Manage 
                    </li>
                    <li className='sidebarItem'>
                        <TimelineIcon className='sidebarIcon' />
                        Analytics 
                    </li>
                    <li className='sidebarItem'>
                        <Report className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar