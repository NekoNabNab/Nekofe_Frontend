import React, { useState, useEffect } from "react";
import axios from "axios";

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const UserList = () => {
    // funtion list
    const [user, setUser] = useState([]);

    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = async () => {
      const response = await axios.get("http://localhost:5000/user");
      setUser(response.data);
    };
  
    const deleteUser = async (uuid) => {
      await axios.delete(`http://localhost:5000/user/${uuid}`);
      getUser();
    };

  return (
    <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>Nama User</th>
        <th scope='col'>Email</th>
        <th scope='col'>Role</th>
        <th scope='col'>Actions</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
    {user.map((user, index) => (
      <tr key={user.uuid}>
        <td>
          <div className='d-flex align-items-center'>
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{user.nama_user}</p>
            </div>
          </div>
        </td>
        <td>
          <p className='fw-normal mb-1'>{user.email}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>{user.role}</p>
        </td>
        <td>
            <Link
              to={`/admin/user/edit/${user.uuid}`}
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
             onClick={() => deleteUser(user.uuid)} 
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

export default UserList