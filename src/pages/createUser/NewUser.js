import React from 'react';
import './NewUser.css';

function NewUser() {
  return (
    <div className='newuser'>
        <h1 className='newuserTitle'>Create User</h1>
        <form className='newuserForm'>
            <div className='newuserItem'>
                <label>Username</label>
                <input type={'text'} placeholder="Enter name" />
            </div>
            <div className='newuserItem'>
                <label>Full name</label>
                <input type={'text'} placeholder="Enter fullname" />
            </div>
            <div className='newuserItem'>
                <label>Email</label>
                <input type={'email'} placeholder="Enter email" />
            </div>
            <div className='newuserItem'>
                <label>Password</label>
                <input type={'password'} placeholder="Enter password" />
            </div>
            <div className='newuserItem'>
                <label>Phone</label>
                <input type={'text'} placeholder="Enter phone" />
            </div>
            <div className='newuserItem'>
                <label>Address</label>
                <input type={'text'} placeholder="Enter address" />
            </div>
            <div className='newuserItem'>
                <label>Gender</label>
                <div className='newuserGender'>
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newuserItem">
            <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}

export default NewUser