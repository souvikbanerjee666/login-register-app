import {createBrowserRouter,RouterProvider} from "react-router-dom"
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard'
import ProfileSetup from './components/ProfileSetup'
const routerMain = createBrowserRouter([
   {
    path:"/",
    element:<UserRegister/>

   },
   {
   path:"/UserLogin",
    element:<UserLogin/>
   },
   {
   path:"/profile-setup",
    element:<ProfileSetup/>
   },
   {
   path:"/dashboard",
    element:<Dashboard/>
   }
])
const Router1 = () => {
  return (
    <RouterProvider router={routerMain}></RouterProvider>
  )
}

export default Router1