import {createBrowserRouter,RouterProvider} from "react-router-dom"
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
const routerMain = createBrowserRouter([
   {
    path:"/",
    element:<UserRegister/>,
    children:[
        {
   path:"/UserLogin",
    element:<UserLogin/>
   }
    ]

   }
   
])
const App1= () => {
  return (
    <RouterProvider router={routerMain}></RouterProvider>
  )
}

export default App1;