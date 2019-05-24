import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../css/components/LoginContainer.css';
import { sha256 } from 'js-sha256';

class LoginContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username: null,
            password: null,
            login: this.props.login
        }
    }

    finalizelogin(result){
    }

    handleLogin = (event) => {
        //FIGURE OUT LOGIN THROUGH API
        var loggedin = (fetch('http://127.0.0.1:5000/Login?username='+this.state.username+'&password='+this.state.password, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            })
        .then(function(result){return result.value}))
          console.log(loggedin)
          this.finalizelogin(loggedin)
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangePassword = (event) => {
        console.log(sha256(event.target.value))
        this.setState({
            password: sha256(event.target.value)
        });
    }

    onHide = (event) => {}

    render() {
        return (
            <div className='login-container'>
                <Modal show={ true } onHide={ this.onHide }>
                    <Modal.Header closeButton>
                        <Modal.Title className="mx-auto"><h3>Login</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='username'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='email' placeholder='Enter username...' onChange={this.handleChangeUsername} />
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password...' onChange={this.handleChangePassword} />
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleLogin}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LoginContainer;