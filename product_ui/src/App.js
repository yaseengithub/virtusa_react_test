import React from 'react';
//import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/Login';
//import Dashboard from './components/dashboard/Dashboard';
import DashboardPanel from './components/dashboard/DashboardPanel';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/dashboard' component={DashboardPanel}/>
                </Switch>
            </div>
        )
    }
}

export default App;

