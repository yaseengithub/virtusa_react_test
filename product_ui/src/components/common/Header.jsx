import React from 'react';
import { setLocalStore } from '../../util/util';

class Header extends React.Component {
    render() {
        return (
            <div className="headers bg-dark">
                <div  className="logo-section">
                    APP LOGO
                </div>
                <div  className="options-section">
                    <span>{this.props.fullname}</span> | <span className="logout"
                        onClick = {() => {
                            setLocalStore('username', null);
                            this.props.history.push('/');
                        }}
                    >Sign out</span>
                </div>
            </div>
        )
    }
}

export default Header;