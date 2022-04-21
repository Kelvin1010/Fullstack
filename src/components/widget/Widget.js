import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Widget.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../requestMethod';

function Widget() {

    const [user,setUser] = useState([]);

    const getUsers = async () => {
        try {
            const res = await userRequest.get(`users/?new=true`)
            setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUsers();
    },[])


    return (
        <div className='widget'>
            <span className='widgetTitle'>
                New Join Menbers
            </span>
            <ul className='widgetList'>
                {user.map((item) => (
                    <li className='widgetListItem' key={user._id}>
                        <Avatar src={item.img || 'https://scontent.fhph3-1.fna.fbcdn.net/v/t1.6435-9/137266310_1376236656056493_4066240277794875818_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=47tskLq51UMAX9uTzU8&_nc_ht=scontent.fhph3-1.fna&oh=00_AT8vBQRzc_rhhL6uQiNQ_o2AG6hj5yShxhWo8QOZPomv3g&oe=627F18C6'} alt='' className='widgetItemImg' />
                        <div className='widgetUser'>
                            <span className='widgetUsername'>{item.username}</span>
                            <span className='widgetUserTitle'>{}</span>
                        </div>
                        <button className='widgetButton'>
                            <VisibilityIcon className='widgetIcon'/>
                            Display 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Widget