import React from 'react';
import { connect } from 'react-redux';
import FormBuilder from '../common/FormBuilder';
import { productcolumns } from './productcolumns';
import { updateProductItem } from '../../api/services';

class EditCreateProduct extends React.Component{
    constructor(){
        super();
        this.savedata = this.savedata.bind(this);
    }
    savedata(data){
        updateProductItem({
            action: data.id ? 'UPDATE' : 'CREATE',
            item: {...data, created: this.props.username}
        }).then(resp => {
            this.props.history.push('/dashboard')
        });        
    }
    render(){
        return(
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <FormBuilder
                    formfields={productcolumns}
                    savedata={this.savedata}
                    editrecord={this.props.editrecord}
                />
            </div>
            <div className="col-sm-2"></div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.userdetails.username,
    productdata: state.products.productdata,
    editrecord: state.products.editrecord
});

export default connect(mapStateToProps)(EditCreateProduct);