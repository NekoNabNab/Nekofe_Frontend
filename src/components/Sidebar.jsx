import React from 'react';
import '../css/Sidebar.css';
import { NavLink, useNavigate} from 'react-router-dom';
import logo from "../assets/img/logo.png"

import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { MDBBtn } from 'mdb-react-ui-kit';

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
  <nav className='nav'>
    <div>
      <NavLink to='/' className='nav-logo'>
        <img src={logo} className='logo' alt='logo' />
      </NavLink>

      <div className='nav-list'>
        
        <NavLink to='/dashboard' className='nav-link'>
          <span className='nav-link-name'>Dashboard</span>
        </NavLink>

        {/* admin */}

        {user && user.role === "admin" && (
          <div>
            <NavLink to='/admin/menu' className='nav-link'>
              <span className='nav-link-name'>Menu</span>
            </NavLink>
            <NavLink to='/admin/meja' className='nav-link'>
              <span className='nav-link-name'>Meja</span>
            </NavLink>
            <NavLink to='/admin/user' className='nav-link'>
              <span className='nav-link-name'>User</span>
            </NavLink>
          </div>
        )}

        {/* manajer */}

        {user && user.role === "manajer" && (
          <div>
            <NavLink to='/manajer/laporandetailtransaksi' className='nav-link'>
              <span className='nav-link-name'>Detail Transaksi</span>
            </NavLink>
            <NavLink to='/manajer/laporantransaksi' className='nav-link'>
              <span className='nav-link-name'>Transaksi</span>
            </NavLink>
            <NavLink to='/manajer/statistikmenu' className='nav-link'>
              <span className='nav-link-name'>Statistik Menu</span>
            </NavLink>
          </div>
        )}

        {/* Kasir */}
        {user && user.role === "kasir" && (
          <div>
            <NavLink to='/kasir/transaksi' className='nav-link'>
              <span className='nav-link-name'>Transaksi</span>
            </NavLink>
          </div>
        )}

        <div className='nav-link mt-2'>
          <hr />
          <span className='nav-link-name mt-0'><small><b>{user && user.nama_user} | {user && user.role}</b></small></span>
        </div>
      </div>
      <MDBBtn 
      onClick={logout} 
      className='nav-link mx-3 my-0'>
        Logout
      </MDBBtn>
    </div>


  </nav>
  );
}

export default Sidebar