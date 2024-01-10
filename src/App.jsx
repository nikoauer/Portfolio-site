import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import './App.css'
import { IStaticMethods } from "preline/preline";


function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
