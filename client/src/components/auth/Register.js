import React from 'react'
import { connect } from 'react-redux'

import { startRegisterUser } from '../../actions/userAction'

import { Container, Form } from 'react-bootstrap'

class Register extends React.Component{

    constructor(props) {
        super(props)
        this.state= {
            username: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        //console.log(formData)
        const redirect = () =>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
     }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Container>
                    <h1 className="text-center mt-5 text-secondary" >Register with us</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="username"> username </Form.Label>
                        <Form.Control 
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                        /><br/>
                        <Form.Label htmlFor="email"> email </Form.Label>
                        <Form.Control 
                            type="text"
                            id="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        /><br/>
                        <Form.Label htmlFor="password"> password </Form.Label>
                        <Form.Control 
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        /><br/>
                        <input type="submit" value="Register" className="btn btn-secondary" />
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect()(Register)