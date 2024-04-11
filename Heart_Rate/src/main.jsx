import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Analysis from './routes/Analysis';
import Deployment from './routes/Deployment';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"Analysis",
        element:<Analysis/>
      },
      {
        path:"FrequentlyAskedQuestions",
        element:<Deployment/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
