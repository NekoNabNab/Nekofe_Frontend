import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const DetailTransaksiList = () => {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nama User</th>
          <th scope='col'>Nama Pelanggan</th>
          <th scope='col'>Nomor Meja</th>
          <th scope='col'>Tanggal</th>
          <th scope='col'>Status</th>
          <th scope='col'>Aksi</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Rozan</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Rozan</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>2</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Rp.20.000</p>
            </div>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  )
}

export default DetailTransaksiList