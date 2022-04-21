import './Chart.css';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey,grid}) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>
                {title}
            </h3>
            <ResponsiveContainer aspect={4/1} width="100%" height="100%">
                <LineChart
                    data={data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKey} stroke='#5550bd'/>
                <YAxis />
                <Tooltip />
                <Legend />
                {grid && <Line type="monotone" dataKey="Active User" stroke="#5550bd" activeDot={{ r: 8 }} />}
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart