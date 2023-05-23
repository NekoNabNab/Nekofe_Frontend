import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBCardTitle, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const KeranjangMenu = () => {
  return (
    <div>
        <MDBTable align='middle' small>
            {/* <MDBTableHead>
                <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </MDBTableHead> */}
            <MDBTableBody>
                <tr>
                    <td>
                        <MDBBadge className='px-3 py-2' color='success' pill>
                            2
                        </MDBBadge>
                    </td>
                    <td>
                        <div className='d-flex align-items'>
                            <div className=''>
                                <p className='fw-bold mb-1'>Nasi Goreng</p>
                                <p className='text-muted mb-0'>Rp.23.000</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='d-flex align-items'>
                            <div className=''>
                                <p className='fw-bold mb-1'>Rp.12.000</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MDBBadge className='px-3 py-2' color='success' pill>
                            2
                        </MDBBadge>
                    </td>
                    <td>
                        <div className='d-flex align-items'>
                            <div className=''>
                                <p className='fw-bold mb-1'>Nasi Goreng</p>
                                <p className='text-muted mb-0'>Rp.23.000</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='d-flex align-items'>
                            <div className=''>
                                <p className='fw-bold mb-1'>Rp.12.000</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </MDBTableBody>
        </MDBTable>

        <MDBRow className='total'>
            <MDBCol>
            <MDBCardSubTitle><h6>Total Harga</h6></MDBCardSubTitle>
            <MDBCardTitle><h6><b>Rp.120.000</b></h6></MDBCardTitle>
            </MDBCol>
            <MDBCol className='text-end'>
            <Link to="/kasir/transaksi"><MDBBtn>Tambah</MDBBtn></Link>
            </MDBCol>
        </MDBRow>
        
    </div>
  )
}

export default KeranjangMenu