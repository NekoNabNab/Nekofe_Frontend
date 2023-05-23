import React, { useEffect } from "react";
import Layout from '../../Layout'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';

import DetailTransaksiList from '../components/DetailTransaksiList';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const LaporanDetailTransaksiPages = () => {
    // protection
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/");
      }
    }, [isError, navigate]);
  return (
    <Layout>
      <div className="p-4 row">
        <MDBDropdown className='col-2 dropdown'>
          <MDBDropdownToggle>Filter Detail Transaksi</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>Lunas</MDBDropdownItem>
            <MDBDropdownItem link>Belum Bayar</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <MDBInputGroup className='col search'>
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>

      <div className="p-4 list-meja">
        <DetailTransaksiList/>
      </div>
    </Layout>
  )
}

export default LaporanDetailTransaksiPages