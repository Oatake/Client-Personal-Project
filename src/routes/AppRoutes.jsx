import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from '../components/layout/MainLayout'
import FloorPlan from '../components/layout/MainContainer/FloorPlan';
import UserManagement from '../components/layout/MainContainer/UserManagement';
import OrderDashboard from '../components/layout/MainContainer/OrderDashboard';
import Menues from '../components/layout/MainContainer/Menues';
import KitChenDashboard from '../components/layout/MainContainer/KitChenDashboard';
import Reception from '../components/layout/MainContainer/Reception';

import Unauthorized from '../components/Unauthorized';

export default function Approutes() {
  const router = createBrowserRouter([
    {
        path:"/",
        element : <MainLayout/>,
        children : [
          {index : true, element : <FloorPlan />},
          {path : "order", element :<OrderDashboard/>},
          {path : "admin", element : <UserManagement/>},
          {path : "menues", element : <Menues/>},
          {path : "kitchen", element : <KitChenDashboard/>},
          {path : "reception", element : <Reception/>},
          {path : "reception", element : <Unauthorized/>}
        ]
    },
  
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
