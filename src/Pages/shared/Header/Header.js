import './Header.css';

import React from 'react';

import {
  Button,
  Container,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  return (
    <>
      <Navbar className='total' >
        <Container  >
          <Navbar.Brand href="#home"> <img width={"20px"} src="./Images/logo.jpg" alt="" srcset="" /> Vacation Guru</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <NavLink to="/home">
              {" "}
              <Button className="mx-3 "> Home</Button>
            </NavLink>
            <NavLink to="/about">
              {" "}
              <Button className="mx-3"> About</Button>{" "}
            </NavLink>
           

            <NavLink to="/article">
              <Button className="mx-3"> Articles</Button>
            </NavLink>
           
            {user?.email ? (
              <div className='drop'>
              <NavDropdown title="Dashboard" id="basic-nav-dropdown"> 
              <NavDropdown.Item  as={NavLink} to="/myorders" >  My orders</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/manage">Manage All orders</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/service">Add a New Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logOut} href="#action/3.4"> Logout</NavDropdown.Item>
              </NavDropdown>


              
              </div>
           
            ) : (
              <NavLink to="/login">
                <Button className="mx-3"> Login</Button>
              </NavLink>
            )}
            <Navbar.Text >
             <h6> &nbsp;Username:<a href="#login">{user?.displayName}</a></h6> 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;