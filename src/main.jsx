import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Components/Body.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
	{
		path: "/NomNomFoods",
		element: <App/>,
		children: [
			{
				path: "/NomNomFoods",
				element: <Body />
			}
		]
	},
	
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
