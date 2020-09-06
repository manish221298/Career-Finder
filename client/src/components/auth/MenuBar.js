import React from 'react'
//import { Link } from 'react-router-dom'
import {Nav, Navbar, Dropdown} from 'react-bootstrap'
import { connect } from 'react-redux'
 


class MenuBar extends React.Component{


    handleLogout = () => {
        localStorage.removeItem('authToken')
        window.location.href = '/'
    }

    render(){
        //console.log(this.props.users.role)
        return (
            <div style={{}}>
                        {
                            localStorage.getItem('authToken') ? 
                            <div className ='navbar-nav '>
                                {
                                    this.props.users.role === 'admin' ? 
                                    <div>
                                        {/* // Navbar for Admin */}
                                       <Navbar bg="light" variant="light">
                                        <Navbar.Brand href={"/"}>Career Finder</Navbar.Brand>
                                        <Nav className="ml-auto">
                                        <Dropdown>
                                            <Dropdown.Toggle className="text-secondary mr-5" variant="light" id="dropdown-basic">
                                                Company
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="mr-5">
                                                <Dropdown.Item href="/createprofile">Create-Profile</Dropdown.Item>
                                                <Dropdown.Item href="/fresherjob">FresherJob</Dropdown.Item>
                                                <Dropdown.Item href="/showapplicant">Applicant</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={this.handleLogout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Nav.Item>
                                            <Nav.Link href={"/resume"}>Resume</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link to="#" onClick={this.handleLogout} >Logout</Nav.Link>
                                        </Nav.Item>
                                        </Nav>
                                        </Navbar>
                                    </div>
                                    :
                                    <div>
                                        <Navbar bg="light" variant="light">
                                        <Navbar.Brand href={"/"}>Career Finder</Navbar.Brand>
                                        <Nav className="ml-auto">
                                        <Nav.Link href={"/"}>Home</Nav.Link>
                                        <Nav.Item>
                                            <Nav.Link href={"/users/register"}>Internships</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href={"/fresherjob"}>Fresher Jobs</Nav.Link>
                                        </Nav.Item>
                                        
                                        <Nav.Item>
                                        <Dropdown>
                                            <Dropdown.Toggle className="text-secondary mr-5" variant="light" id="dropdown-basic">
                                                MyProfile
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="mr-5">
                                                <Dropdown.Item href="#3">My Application</Dropdown.Item>
                                                <Dropdown.Item href="/resumeform">Create Resume</Dropdown.Item>
                                                <Dropdown.Item href="/showresume">Show Resume</Dropdown.Item>
                                                <Dropdown.Item href="#2">Edit Resume</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={this.handleLogout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </Nav.Item>
                                        </Nav>
                                        </Navbar>
                                    </div>
                                }
                            </div>
                            :
                            <div>
                                <Navbar bg="light" variant="light">
                                <Navbar.Brand href={"/"}>Career Finder</Navbar.Brand>
                                <Nav className="ml-auto">
                                <Nav.Link href={"/"}>Home</Nav.Link>
                                <Nav.Link href={"/users/register"}>Register</Nav.Link>
                                <Nav.Link href={"/users/login"}>Login</Nav.Link>
                                </Nav>
                                </Navbar>
                            </div>
                        }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        users: state.user
    }
}

export default connect(mapStateToProps)(MenuBar)