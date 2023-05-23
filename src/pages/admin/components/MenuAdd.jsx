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

const MenuAdd = () => {
// toggle funtion
const [basicModal, setBasicModal] = useState(false);
const toggleShow = () => setBasicModal(!basicModal);

// add meja fuction
const [nama_menu, setNama_menu] = useState("");
const [harga, setHarga] = useState("");
const [jenis, setJenis] = useState("");
const [gambar, setGambar] = useState("");
const [msg, setMsg] = useState("");
const navigate = useNavigate();

const loadImage = (e) => {
    const gambar = e.target.files[0];
    setGambar(gambar);
  };

const saveMenu = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gambar", gambar);
    formData.append("nama_menu", nama_menu);
    formData.append("harga", harga);
    formData.append("jenis", jenis);
    
    try {
      await axios.post("http://localhost:5000/menu", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
    });
    window.location.reload(false);
    navigate("/admin/menu");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};

    return (
        <>
            <MDBBtn onClick={toggleShow} className='col-2 add'>
                <span className='px-2'>Add Menu</span>
                <MDBIcon icon='add' />
            </MDBBtn>
    
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Add Menu</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <form onSubmit={saveMenu}>
                    <p className="has-text-centered">{msg}</p>
                        <MDBModalBody>
                            <MDBInput 
                                wrapperClass='mb-4' 
                                label='Nama Menu' 
                                type='text'
                                value={nama_menu}
                                onChange={(e) => setNama_menu(e.target.value)}
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
                            <MDBInput 
                                wrapperClass='mb-4' 
                                label='Harga' 
                                type='text'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                            <MDBInput wrapperClass='mb-4' type='file' onChange={loadImage}/>
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

export default MenuAdd