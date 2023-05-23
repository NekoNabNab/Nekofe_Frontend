import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage
  } from 'mdb-react-ui-kit';

const MenuCard = () => {
  return (
    <div className='p-2 col-4'>
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardTitle><h6><b>Ayam Goreng</b></h6></MDBCardTitle>
                <MDBCardText>
                    Rp.12.000
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}

export default MenuCard