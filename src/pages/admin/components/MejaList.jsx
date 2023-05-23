import React, { useState, useEffect } from "react";
import axios from "axios";

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const MejaList = () => {

  // funtion list
  const [meja, setmeja] = useState([]);

  useEffect(() => {
    getmeja();
  }, []);

  const getmeja = async () => {
    const response = await axios.get("http://localhost:5000/meja");
    setmeja(response.data);
  };

  const deletemeja = async (mejaId) => {
    await axios.delete(`http://localhost:5000/meja/${mejaId}`);
    getmeja();
  };

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nomor Meja</th>
          <th scope='col'>Status Meja</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {meja.map((meja, index) => (
        <tr key={meja.uuid}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{meja.nomor_meja}</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='warning' pill className='px-3 py-2'>
              {meja.status_meja}
            </MDBBadge>
          </td>
          <td>
            <Link
              to={`/admin/meja/edit/${meja.uuid}`}
            >
              <MDBBtn 
                className='add mx-1' 
                color='info' 
                rounded size='sm'
              >
                  <span className='px-2'>Edit</span>
              </MDBBtn>
            </Link>
            
            <MDBBtn 
              onClick={() => deletemeja(meja.uuid)} 
              color='danger' 
              rounded size='sm'
            >
              Delete
            </MDBBtn>
          </td>
        </tr>
       ))}
      </MDBTableBody>
    </MDBTable>
  )
}

export default MejaList