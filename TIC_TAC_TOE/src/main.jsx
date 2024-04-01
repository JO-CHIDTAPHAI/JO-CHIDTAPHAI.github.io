import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route,Link,} from "react-router-dom";
import TicTacToe from './Components/TicTacToe'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/TicTacToe",
    element: <TicTacToe />
  },
  
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
