import React from 'react';
import Sidebar from '../components/Sidebar'
import '../css/Sidebar.css'


const Layout = ({children}) => {
    return (
        <React.Fragment>
        <main className='row p-0 m-0'>
            <div className='col-md-2'>
                <Sidebar/>
            </div>
        
            <div className="col-md-10 px-5 py-5 inti">
                <div className="container">
                    {children}
                </div>
            </div>
        </main>
        </React.Fragment>
    )
}

export default Layout