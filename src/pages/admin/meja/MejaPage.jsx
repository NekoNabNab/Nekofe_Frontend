import React, { useEffect } from "react";
import Layout from '../../Layout'
import '../../../css/Admin.css'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

// import components
import MejaList from "../components/MejaList";
import MejaAdd from '../components/MejaAdd';

const MejaPage = () => {
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
          <MDBDropdownToggle>Filter Meja</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>Kosong</MDBDropdownItem>
            <MDBDropdownItem link>Terisi</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <MejaAdd/>

        <MDBInputGroup className='col search'>
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>

      <div className="p-4 list-meja">
        <MejaList/>
      </div>
    </Layout>
  )
}

export default MejaPage