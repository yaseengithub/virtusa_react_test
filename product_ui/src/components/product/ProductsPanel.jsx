import React from 'react';
import Grid from '../common/Grid';
import { productcolumns } from './productcolumns';
import { updateProducts } from '../../actions/products';
import { getProductList } from '../../api/services';

export default class ProductsPanel extends React.Component{
    constructor(){
        super();
        this.getProductData = this.getProductData.bind(this);
    }
    componentDidMount(){
        this.getProductData();
    }
    getProductData(){
        getProductList({
            t: Date.now()
        }).then(resp => {
            this.props.dispatch(updateProducts(resp.data))
        });
    }
    render(){
        return(
            <div>
                <Grid
                    context={this}
                    columns={productcolumns}
                    data={this.props.productdata}
                />
            </div>
        )
    }
}