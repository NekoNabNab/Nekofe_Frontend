import React, { useEffect } from "react";
import Layout from '../../Layout'
import MenuCard from '../components/MenuCard'
import { MDBInputGroup, MDBCardTitle, MDBInput, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';
import '../../../css/Kasir.css'
import KeranjangMenu from '../components/KeranjangMenu';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const TambahTransaksi = () => {
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
      <div className="px-4 pt-4 row">
        <MDBDropdown className='col-2 dropdown'>
          <MDBDropdownToggle>Filter Menu</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>Makanan</MDBDropdownItem>
            <MDBDropdownItem link>Minuman</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <MDBInputGroup className='col search'>
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>
      <hr />
      <div className="px-4 row">
        <div className="col-8 menu-card">
          <div className="row">
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
          </div>
        </div>
        <div className="col-4 px-4">
          <MDBCardTitle><h6><b>Keranjang Menu</b></h6></MDBCardTitle>
          <KeranjangMenu/>
        </div>
      </div>
    </Layout>
  )
}

export default TambahTransaksi