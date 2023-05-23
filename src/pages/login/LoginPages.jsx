import React from "react";
import "../../css/Login.css"
import {
  MDBContainer,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

// import components
import LoginForm from './components/LoginForm';

// import img
import logo from "../../assets/img/nekofeWhite.svg"

const LoginPages = () => {

  return (
    <MDBContainer fluid className='p-4 background-login d-flex flex-column justify-content-center'>

      <MDBRow className='d-flex row-login'>

        <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <div className="my-5 display-3 login-logo d-flex flex-column justify-content-center">
            <img className='logo-login' src={logo} alt="" />
          </div>

        </MDBCol>

        <MDBCol md='4' className='position-relative'>
            <LoginForm/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPages;