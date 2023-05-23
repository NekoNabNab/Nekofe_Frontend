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

  import { Form } from "react-bootstrap";

const UserAdd = () => {
    // toggle funtion
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  
    // add user fuction
    const [nama_user, setNama_user] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  
    const saveUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/user", {
          nama_user : nama_user,
          email : email,
          password : password,
          confPassword : confPassword,
          role : role
        });
        window.location.reload(false);
        navigate("/admin/user");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    return (
        <>
            <MDBBtn onClick={toggleShow} className='col-2 add'>
                <span className='px-2'>Add User</span>
                <MDBIcon icon='add' />
            </MDBBtn>
    
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Add User</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <form onSubmit={saveUser}>
                    <p className="has-text-centered">{msg}</p>
                        <MDBModalBody>
                            <MDBInput 
                                value={nama_user}
                                onChange={(e) => setNama_user(e.target.value)}
                                wrapperClass='mb-4' label='Nama User' type='text'
                            />
                            <MDBInput 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                wrapperClass='mb-4' label='Email' type='email'
                            />
                            <MDBInput 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                wrapperClass='mb-4' label='Password' type='password'
                            />
                            <MDBInput 
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)}
                                wrapperClass='mb-4' label='Conf Password' type='password'
                            />
                            <Form.Select 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className='mb-4' label='Role'
                            >
                                <option>Role</option>
                                <option value="admin">Admin</option>
                                <option value="manajer">Manajer</option>
                                <option value="kasir">Kasir</option>
                            </Form.Select>
                          
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

export default UserAdd