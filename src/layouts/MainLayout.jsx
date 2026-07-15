import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className='main-page'>
        <Header theme="light" />
        <Outlet/>
    </div>
  )
}

export default MainLayout