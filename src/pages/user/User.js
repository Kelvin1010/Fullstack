import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

function User() {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1>Edit User </h1>
            <Link to={'/createUser'}>
                <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <Avatar src='https://file.tinnhac.com/resize/600x-/2021/01/04/20210104165720-341d.jpg' alt='' />
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>
                            Kelvin Ward 
                        </span>
                        <span className='userShowUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className='userShowBottom'>
                    <span className='userShowTitle'>
                        Account Details
                    </span>
                    <div className='userShowInfo'>
                        <PermIdentity />
                        <span className='userShowInfoTitle'>
                            shanks98
                        </span>
                    </div>
                    <div className='userShowInfo'>
                        <CalendarToday />
                        <span className='userShowInfoTitle'>
                            20.09.2001
                        </span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className='userShowInfo'>
                        <PhoneAndroid />
                        <span className='userShowInfoTitle'>
                            0383046231
                        </span>
                    </div>
                    <div className='userShowInfo'>
                        <MailOutline />
                        <span className='userShowInfoTitle'>
                            imp@gmail.com
                        </span>
                    </div>
                    <div className='userShowInfo'>
                        <LocationSearching />
                        <span className='userShowInfoTitle'>
                            New York
                        </span>
                    </div>
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>
                    Edit 
                </span>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className='userUpdateItem'>
                            <label>User Name</label>
                            <input 
                                type={'text'} 
                                placeholder='shanks98' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className='userUpdateItem'>
                            <label>Full Name</label>
                            <input 
                                type={'text'} 
                                placeholder='Kelvin Ward' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input 
                                type={'text'} 
                                placeholder='imp@gmail.com' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className='userUpdateItem'>
                            <label>Phone</label>
                            <input 
                                type={'text'} 
                                placeholder='0383046231' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className='userUpdateItem'>
                            <label>Address</label>
                            <input 
                                type={'text'} 
                                placeholder='New York' 
                                className='userUpdateInput' 
                            />
                        </div>
                    </div>
                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img 
                                className='userUpdateImg'
                                src='https://file.tinnhac.com/resize/600x-/2021/01/04/20210104165720-341d.jpg'
                                alt=''
                            />
                            <label htmlFor='file'>
                                <Publish className='userUpdateIcon' />
                            </label>
                            <input type={'file'} id='file' style={{display: "none"}} />
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User