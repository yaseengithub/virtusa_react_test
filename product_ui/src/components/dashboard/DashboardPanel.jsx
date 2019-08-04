import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import { getLocalStore } from '../../util/util';
import { getUserDetails } from '../../api/services';
import { updateUserDetails } from '../../actions/userdetails';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import EditCreateProduct from '../product/EditCreateProduct';

class DashboardPanel extends React.Component {
    componentDidMount(){
        getUserDetails({username: getLocalStore('username')}).then(x => {
            if(x.success){
                this.props.dispatch(updateUserDetails(x.data))
            }
        })
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <Route exact path={this.props.match.path} component={Dashboard} />
                <Route path={`${this.props.match.path}/update`} component={EditCreateProduct} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.userdetails.username,
    fullname: state.userdetails.fullname
});

export default connect(mapStateToProps)(DashboardPanel);