import React from 'react';
import image from '../assets/images/JAMM-Gaming.png';
import { useEffect, useState } from 'react';

function SideBar() {
    let [products, setProducts] = useState([])
    let [users, setUsers] = useState([])
  
    let getUsers = () => {
      fetch('http://localhost:3010/api/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }
    useEffect(() => {
      getUsers()
    }, [])
  
    let getProducts = () => {
      fetch('http://localhost:3010/api/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(() => {
      getProducts()
    }, [])
  
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav  sidebar sidebar-dark accordion" 
            style={{backgroundColor:"#ecb016"}} id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" style={{maxWidth:"100px"}} style={{marginTop:"25px"}} href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Jamm Gaming"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>GRUPO 8 JAMM</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Catálogo</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
           
           
        </React.Fragment>
    )
}
export default SideBar;