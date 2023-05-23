import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const TransaksiAdd = () => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
  
    return (
        <>
            <MDBBtn onClick={toggleShow} className=''>
                <span className='px-2'>Add Transaksi</span>
                <MDBIcon icon='add' />
            </MDBBtn>
    
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Add Transaksi</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>

                    <form action="">
                        <MDBModalBody>
                            <MDBInput wrapperClass='mb-4' label='Nama Pelanggan' type='text'/>
                            <Form.Select className='mb-4' label='Nomor Meja'>
                                <option>Nomor Meja</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </Form.Select>
                            <Form.Select className='mb-4'>
                                <option>Status Pembayaran</option>
                                <option value="1">Lunas</option>
                                <option value="2">Belum Bayar</option>
                            </Form.Select>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <Link to="/tambahtransaksi"><MDBBtn>Next</MDBBtn></Link>
                        </MDBModalFooter>
                    </form>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
        
    );
}

export default TransaksiAdd