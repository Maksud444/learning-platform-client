import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <div>
          <Link className='m-2' to='/'>Home</Link>
           <Link to='/course'>Course</Link>
          </div>
          </Nav>
          <Form className="d-flex">
          <Button variant="primary ">Register</Button>
            <Button variant="outline-success ms-3">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;