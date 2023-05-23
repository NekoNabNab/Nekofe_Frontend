import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../../features/authSlice";

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);
  
  const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
  };
    return (
        <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <form onSubmit={Auth}>
              {isError && <p className='text-center'>{message}</p>}
                <MDBInput 
                  wrapperClass='mb-4' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label='Email'
                  required autocomplete="on" 
                  type='email'
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Password'  
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required autocomplete="on"
                />

                <MDBBtn 
                  className='w-100 mb-4' 
                  size='md' 
                  type="submit" 
                  value="Submit"
                >
                  {isLoading ? "Loading..." : "Login"}
                </MDBBtn>
              </form>     
            </MDBCardBody>
        </MDBCard>
    )
}

export default LoginForm