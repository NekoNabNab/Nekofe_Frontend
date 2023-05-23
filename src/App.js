import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPages from './pages/login/LoginPages'
import Dashboard from './pages/Dashboard';

// Admin
import {
  MenuPage, 
  MejaPage, 
  UserPage
} from "./pages/admin"

// Kasir
import {
  TambahTransaksi, 
  Transaksi
} from "./pages/kasir"

// Admin
import {
  LaporanDetailTransaksiPages, 
  LaporanTransaksi, 
  StatistikMenuPages
} from "./pages/manajer"
import MejaEdit from './pages/admin/components/MejaEdit';
import MenuEdit from './pages/admin/components/MenuEdit';
import UserEdit from './pages/admin/components/UserEdit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login Pages */}
          <Route path="/" element={<LoginPages/>} />

          {/* Dashboard Pages*/}
          <Route path="/dashboard" element={<Dashboard/>} />

          {/* Admin */}
          <Route path="/admin/meja" element={<MejaPage/>} />
          <Route path="/admin/menu" element={<MenuPage/>} />
          <Route path="/admin/user" element={<UserPage/>} />
          <Route path="/admin/meja/edit/:uuid" element={<MejaEdit/>} />
          <Route path="/admin/menu/edit/:uuid" element={<MenuEdit/>} />
          <Route path="/admin/user/edit/:uuid" element={<UserEdit/>} />

          {/* Kasir */}
          <Route path="/kasir/tambahtransaksi" element={<TambahTransaksi/>} />
          <Route path="/kasir/transaksi" element={<Transaksi/>} />

          {/* Manajer */}
          <Route path="/manajer/laporandetailtransaksi" element={<LaporanDetailTransaksiPages/>} />
          <Route path="/manajer/statistikmenu" element={<StatistikMenuPages/>} />
          <Route path="/manajer/laporantransaksi" element={<LaporanTransaksi/>} />

          <Route path="/tambahtransaksi" element={<TambahTransaksi/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App