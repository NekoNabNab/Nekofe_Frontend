import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
    MDBBtn,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
  } from 'mdb-react-ui-kit';
import Layout from "../../Layout";

const MejaEdit = () => {
    //function edit
    const [nomor_meja, setNomor_meja] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { uuid } = useParams();
  
    useEffect(() => {
      const getMejaBy_uuid = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/meja/${uuid}`);
          setNomor_meja(response.data.nomor_meja);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getMejaBy_uuid();
    }, [uuid]);
  
    const updateMeja = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/meja/${uuid}`, {
          nomor_meja: nomor_meja
        });
        navigate("/admin/meja");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    return (
      <Layout>
        <div className="row justify-content-center">
        <MDBCard className='col-6 my-5 bg-glass'>
            <MDBCardBody className='p-5'>
            <MDBCardTitle>Edit Meja</MDBCardTitle>
              <form onSubmit={updateMeja}>
                <p className="has-text-centered">{msg}</p>
                <MDBInput 
                  wrapperClass='mb-4' 
                  value={nomor_meja}
                  onChange={(e) => setNomor_meja(e.target.value)}
                  label='Edit Nomor Meja' 
                  type='text'
                />

                <MDBBtn 
                  className='mb-4' 
                  size='md' 
                  type="submit" 
                >
                  Save Change
                </MDBBtn>
              </form>     
            </MDBCardBody>
        </MDBCard>
        </div>
      </Layout>
    );
}

export default MejaEdit