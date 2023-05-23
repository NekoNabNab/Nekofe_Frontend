import React, { useEffect } from "react";
import Layout from '../../Layout'
import '../../../css/Admin.css'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';

// import components
import UserAdd from '../components/UserAdd';
import UserList from '../components/UserList';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const UserPage = () => {
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
          <MDBDropdownToggle>Filter User</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link>Admin</MDBDropdownItem>
            <MDBDropdownItem link>Manajer</MDBDropdownItem>
            <MDBDropdownItem link>Kasir</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <UserAdd/>

        <MDBInputGroup className='col search'>
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>

      <div className="p-4 list-meja">
        <UserList/>
      </div>
    </Layout>
  )
}

export default UserPage