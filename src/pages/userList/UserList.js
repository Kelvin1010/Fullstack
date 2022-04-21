import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { Delete, DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../chartData'
import { Link } from 'react-router-dom';


function UserList() {

  const [data,setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id))

  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', 
      Username: 'User Name', 
      width: 170, 
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 170 },
    {
      field: 'status',
      headerName: 'status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Trabsaction',
      sortable: false,
      width: 220,
    },
    {
      field: "action",
      headerName: "Action",
      width:150,
      renderCell: (params) => {
        return (
          <div className='actionListUser'>
            <Link to={'/user/' + params.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    }
];

  return (
    <div className='userlist'>
         <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection 
            disableSelectionOnClick
        />
    </div>
  )
}

export default UserList