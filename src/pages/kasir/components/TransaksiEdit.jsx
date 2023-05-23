import React, { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
  } from 'mdb-react-ui-kit';

const DetailTransaksiEdit = () => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
  
    return (
        <>
            <MDBBtn onClick={toggleShow} className='add' color='info' rounded size='sm'>
                <span className='px-2'>Edit</span>
            </MDBBtn>
    
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Edit Transaksi</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <form action="">
                        <MDBModalBody>
                            <MDBInput wrapperClass='mb-4' label='Menu Dipesan' type='text'/>
                            <MDBInput wrapperClass='mb-4' label='Jumlah' type='text'/>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </form>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
        
    );
}

export default DetailTransaksiEdit