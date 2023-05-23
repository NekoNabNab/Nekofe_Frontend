import React from 'react'
import {MDBBtn,MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import TransaksiEdit from './TransaksiEdit';

const TransaksiList = () => {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nama Pelanggan</th>
          <th scope='col'>Nomor Meja</th>
          <th scope='col'>Nama Kasir</th>
          <th scope='col'>Tanggal Transaksi</th>
          <th scope='col'>Status</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Nabila Rozan</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>5</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Nabila Rozan</p>
            </div>
          </td>
          <td>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>5/03/2023</p>
            </div>
          </td>
          <td>
            <MDBBadge color='warning' pill className='px-3 py-2'>
              Lunas
            </MDBBadge>
          </td>
          <td>
            <TransaksiEdit/>
            <MDBBtn color='danger' className='' rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  )
}

export default TransaksiList