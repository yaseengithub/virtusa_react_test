import React from 'react';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../api/services';
import { setLocalStore } from '../../util/util';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
        this.loginnow = this.loginnow.bind(this);
    }
    handleInput(field, e) {
        this.setState({
            [field]: e.target.value
        })
    }
    loginnow() {
        loginUser(this.state).then(resp => {
            if (resp.success) {
                setLocalStore('username', resp.userdetails.username)
                this.props.history.push('/dashboard');
            } else {
                alert("Please Login with user1 or user2 or user3")
            }
        })
    }
    render() {
        return (
            <div className="login-area">
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input className="form-control" id="username" type="text" value={this.state.username} onChange={(e) => {
                        this.handleInput('username', e)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" id="password" type="password" value={this.state.password} onChange={(e) => {
                        this.handleInput('password', e)
                    }} />
                </div>
                <button className="btn btn-primary"
                    onClick={this.loginnow}
                >Login</button>
            </div>    
        )
    }
}

export default withRouter(Login);