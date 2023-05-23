import React, { useState, useEffect } from "react";
import axios from "axios";

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const MenuList = () => {
  // funtion list
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    getmenu();
  }, []);

  const getmenu = async () => {
    const response = await axios.get("http://localhost:5000/menu");
    setmenu(response.data);
  };

  const deletemenu = async (uuid) => {
    await axios.delete(`http://localhost:5000/menu/${uuid}`);
    getmenu();
  };

  return (
    <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>Nama Menu</th>
        <th scope='col'>Jenis</th>
        <th scope='col'>Harga</th>
        <th scope='col'>Actions</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
    {menu.map((menu, index) => (
      <tr key={menu.uuid}>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src={menu.url}
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{menu.nama_menu}</p>
            </div>
          </div>
        </td>
        <td>
          <p className='fw-normal mb-1'>{menu.jenis}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>Rp.{menu.harga}</p>
        </td>
        <td>
            <Link
              to={`/admin/menu/edit/${menu.uuid}`}
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
            onClick={() => deletemenu(menu.uuid)} 
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

export default MenuList