import React, { useEffect, useMemo, useState } from 'react';
import { userdata } from '../../chartData';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Widget from '../../components/widget/Widget';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import { userRequest } from '../../requestMethod';
import './Home.css';

function Home() {

  const [userStats,setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const getStats = async () => {
    try {
      const res = await userRequest.get("/users/stats")
      res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStats()
  },[MONTHS])
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey={"Active User"} />
        <div className='homeWidgets'>
          <Widget />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home