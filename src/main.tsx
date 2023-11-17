import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import BaseLayOut from './layout/base-layout'
import HomePage from './page/home-page/home-page'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Destination from './page/destination/destination'
import Crew from './page/crew/crew'
import Technology from './page/technology/technology'
import { PointContext,SetPointContext } from './context/point-context'


const router = createBrowserRouter([
  {
    path: "/",
    element:<BaseLayOut/>,
    children:[
      {
        path:"/",
        element:<>
            <HomePage/>
        </>
      },
      {
        path:"/HOME",
        element:<HomePage/>
      },
      {
        path:"/DESTINATION",
        element:<Destination/>
      },
      {
        path:"/CREW",
        element:<Crew/>
      },
      {
        path:"/TECHNOLOGY",
        element:<Technology/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
