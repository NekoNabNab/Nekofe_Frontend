import React, { useEffect } from "react";
import Layout from '../../Layout'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';
import TransaksiList from '../components/TransaksiList';
import TransaksiAdd from '../components/TransaksiAdd';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const Transaksi = () => {
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
        <MDBDropdown className='col-1 mx-4 dropdown'>
          <MDBDropdownToggle>Filter</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>Lunas</MDBDropdownItem>
            <MDBDropdownItem link>Belum Bayar</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <div className="col-3">
          <TransaksiAdd/>
        </div>
        
        <MDBInputGroup className='col search'>
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>

      <div className="p-4 list-meja">
        <TransaksiList/>
      </div>
    </Layout>
  )
}

export default Transaksi