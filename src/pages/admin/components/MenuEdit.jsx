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

const MenuEdit = () => {
    //function edit
    const [nama_menu, setNama_menu] = useState("");
    const [harga, setHarga] = useState("");
    const [jenis, setJenis] = useState("");
    const [gambar, setGambar] = useState("");
    const [msg, setMsg] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const { uuid } = useParams();

      useEffect(() => {
        getMenuBy_uuid();
      }, [uuid]);

      const getMenuBy_uuid = async () => {
        const response = await axios.get(`http://localhost:5000/menu/${uuid}`);
        setNama_menu(response.data.nama_menu);
        setHarga(response.data.harga);
        setJenis(response.data.jenis);
        setGambar(response.data.gambar);
        setPreview(response.data.url);
      };

      const loadImage = (e) => {
        const gambar = e.target.files[0];
        setGambar(gambar);
      };
  
    const updateMenu = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("gambar", gambar);
        formData.append("nama_menu", nama_menu);
        formData.append("jenis", jenis);
        formData.append("harga", harga);
        try {
            await axios.patch(`http://localhost:5000/menu/${uuid}`, formData, {
                headers: {
                  "Content-type": "multipart/form-data",
                },
            });
          navigate("/admin/menu");
        } catch (error) {
            setMsg(error.response.data.msg);
        }
    };
  
    return (
      <Layout>
        <div className="row justify-content-center">
        <MDBCard className='col-6 my-5 bg-glass'>
            <MDBCardBody className='p-5'>
            <MDBCardTitle>Edit Menu</MDBCardTitle>
              <form onSubmit={updateMenu}>
                <p className="has-text-centered">{msg}</p>
                <MDBInput 
                  wrapperClass='mb-4' 
                  value={nama_menu}
                  onChange={(e) => setNama_menu(e.target.value)}
                  label='Nama Menu' 
                  type='text'
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  label='Harga' 
                  type='text'
                />
                <Form.Select 
                    className='mb-4' 
                    label='Jenis Menu'
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)} 
                >
                    <option>Jenis Menu</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                </Form.Select>
                <MDBInput wrapperClass='mb-4' type='file' onChange={loadImage}/>

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

export default MenuEdit