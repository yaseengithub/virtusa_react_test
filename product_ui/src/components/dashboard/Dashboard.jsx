import React from 'react';
import { connect } from 'react-redux';
import { getLocalStore } from '../../util/util';
import { getUserDetails } from '../../api/services';
import { updateUserDetails } from '../../actions/userdetails';
import ProductsPanel from '../product/ProductsPanel';
import { updateEditRecord } from '../../actions/products';

class Dashboard extends React.Component {
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
                <div className="mt-2 mb-2">
                    <button className="btn btn-primary"
                        onClick={() => {
                            this.props.dispatch(updateEditRecord(null));
                            this.props.history.push('/dashboard/update')
                        }}
                    >Create Product</button>
                </div>
                <ProductsPanel {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.userdetails.username,
    productdata: state.products.productdata,
});

export default connect(mapStateToProps)(Dashboard);