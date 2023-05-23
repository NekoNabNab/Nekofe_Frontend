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
import { Form } from "react-bootstrap";

const UserEdit = () => {
    //function edit
    const [nama_user, setNama_user] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { uuid } = useParams();
  
    useEffect(() => {
      const getUserBy_uuid = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/user/${uuid}`);
          setNama_user(response.data.nama_user);
          setEmail(response.data.email);
          setPassword(response.data.password);
          setConfPassword(response.data.confPassword);
          setRole(response.data.role);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getUserBy_uuid();
    }, [uuid]);
  
    const updateUser = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/user/${uuid}`, {
          nama_user: nama_user,
          email: email,
          password: password,
          confPassword: password,
          role: role,
        });
        navigate("/admin/user");
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
                <MDBCardTitle>Edit user</MDBCardTitle>
                <form onSubmit={updateUser}>
                    <p className="has-text-centered">{msg}</p>
                    <MDBInput 
                        wrapperClass='mb-4' 
                        value={nama_user}
                        onChange={(e) => setNama_user(e.target.value)}
                        label='Nama User' 
                        type='text'
                    />
                    <MDBInput 
                        wrapperClass='mb-4' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label='Email' 
                        type='text'
                    />
                    <MDBInput 
                        wrapperClass='mb-4' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label='Password' 
                        type='text'
                    />
                    <MDBInput 
                        wrapperClass='mb-4' 
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        label='Conf Password' 
                        type='text'
                    />
                    {/* <MDBInput 
                        wrapperClass='mb-4' 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        label='Role' 
                        type='text'
                    /> */}
                    <Form.Select 
                        className='mb-4' 
                        label='Role'
                        value={role}
                        onChange={(e) => setRole(e.target.value)} 
                    >
                        <option>Role</option>
                        <option value="admin">Admin</option>
                        <option value="manajer">Manajer</option>
                        <option value="kasir">Kasir</option>
                    </Form.Select>

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

export default UserEdit