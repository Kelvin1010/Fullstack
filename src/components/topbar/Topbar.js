import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';



function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbar_left'>
                <span className='logo'>
                    KELVIN WARD 
                </span>
            </div>
            <div className='topbar_right'>
                <div className='topbar_IconContainer'>
                    <NotificationsNoneIcon />
                    <span className='topbar_IconBadge'>
                        2
                    </span>
                </div>
                <div className='topbar_IconContainer'>
                    <LanguageIcon />
                    <span className='topbar_IconBadge'>
                        2
                    </span>
                </div>
                <div className='topbar_IconContainer'>
                    <SettingsIcon />
                </div>
                <Avatar className='avt' src='https://scontent.fhph3-1.fna.fbcdn.net/v/t1.6435-9/137266310_1376236656056493_4066240277794875818_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=47tskLq51UMAX9uTzU8&_nc_ht=scontent.fhph3-1.fna&oh=00_AT8vBQRzc_rhhL6uQiNQ_o2AG6hj5yShxhWo8QOZPomv3g&oe=627F18C6' />
            </div>
        </div>
    </div>
  )
}

export default Topbar