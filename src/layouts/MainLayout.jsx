import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header.jsx";
function MainLayout() {
  return (
    <div className='main-page'>
        <Header theme="light" />
        <Outlet/>
    </div>
  )
}

export default MainLayout