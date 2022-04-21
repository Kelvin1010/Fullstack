import { FormatAlignCenter } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';
import './WidgetLg.css';
import { format, render, cancel, register } from 'timeago.js';

function WidgetLg() {
  const Buttonn = ({type}) => {
    return (<button className={'widgetlgButton ' + type}>{type}</button>)
  }
  const [order,setOrder] = useState([]);

  const getOrders = async () => {
      try {
          const res = await userRequest.get(`orders`)
          setOrder(res.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getOrders();
  },[])

  return (
    <div className='widgetlg'>
        <h3 className='widgetlgTitle'>
          Lastest transactions
        </h3>
        <table className='widgetlgTable'>
          <tr className='widgetlgTr'>
            <th className='widgetTBtitle'>Customer</th>
            <th className='widgetTBtitle' >Date</th>
            <th className='widgetTBtitle' >Amount</th>
            <th className='widgetTBtitle' >Status</th>
          </tr>
          {order.map((item) => (
            <tr className='widgetlgTr' key={item._id}>
              <td className='widgetlgUser'>
                <span className='widgetlgName'>
                  {item.userId}
                </span>
              </td>
              <td className='widgetlgDate'>
                {format(order.createAt)}
              </td>
              <td className='widgetlgAmount'>
                {order.amount}
              </td>
              <td className='widgetlgStatus'>
                <Buttonn type={order.status} />
              </td>
            </tr>
          ))}
        </table>
    </div>
  )
}

export default WidgetLg