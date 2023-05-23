import React, { useEffect } from "react";
import Layout from '../../Layout'
import MenuChart from '../components/MenuChart'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const StatistikMenuPages = () => {
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
          <div className='p-5 welcome text-center'>
            <h4 className='mb-3'>Statistik Menu</h4>
            <MenuChart/>
          </div>
        
        
    </Layout>
  )
}

export default StatistikMenuPages