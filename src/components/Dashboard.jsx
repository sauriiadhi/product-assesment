import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainPart from './MainPart';
import '../styles/main.scss'

function Dashboard() {
  return (
    <>
    <div className='main-section'>
        <Sidebar/>
        <div className='side-content'>
          <Header/>
          <MainPart/>
        </div>
    </div>
    </>
  )
}

export default Dashboard