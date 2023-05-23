import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    MDBBtn,
    MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
  } from 'mdb-react-ui-kit';

const MejaAdd = () => {
    // toggle funtion
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  
    // add meja fuction
    const [nomor_meja, setNomor_meja] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  
    const saveMeja = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/meja", {
          nomor_meja: nomor_meja,
        });
        window.location.reload(false);
        navigate("/admin/meja");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
  
    return (
        <>
            <MDBBtn onClick={toggleShow} className='col-2 add'>
                <span className='px-2'>Add Meja</span>
                <MDBIcon icon='add' />
            </MDBBtn>
    
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Add Meja</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <form onSubmit={saveMeja}>
                    <p className="has-text-centered">{msg}</p>
                        <MDBModalBody>
                            <MDBInput 
                                wrapperClass='mb-4' 
                                label='Nomor Meja' 
                                type='text'
                                value={nomor_meja}
                                onChange={(e) => setNomor_meja(e.target.value)}
                            />
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn type="submit" onClick={toggleShow}>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </form>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
        
    );
}

export default MejaAdd