import React from 'react'
import { useSelector } from 'react-redux';
import '../css/Sidebar.css'

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='p-5 welcome text-center'>
      <h1 className='mb-3'>Selamat Datang <b>{user && user.nama_user} </b> </h1>
      <h4 className='mb-3'>Anda Login Sebagai <b>{user && user.role} </b></h4>
    </div>
  )
}

export default Welcome