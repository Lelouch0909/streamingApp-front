import './HeaderStyle.css'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { NavLink } from 'react-router-dom'

function header() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' className='navbar'>
            <Container fluid>
                <Navbar.Brand href='/' style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    <Button className="me-2" variant="outline-info">Login</Button><Button className="me-2" variant="outline-info">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header