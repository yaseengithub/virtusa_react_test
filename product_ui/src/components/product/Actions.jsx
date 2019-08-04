import React from 'react';
import { updateProductItem } from '../../api/services';
import { updateEditRecord } from '../../actions/products';

export default class Actions extends React.Component{
    render(){
        const {item:{created}, context:{props:{username, dispatch, history}}} = this.props;
        return(
        <div className="actions">
            {created === username && <span>
            <i className="mr-3 fa fa-pencil"
                onClick={() => {
                    dispatch(updateEditRecord(this.props.item));
                    history.push('/dashboard/update')
                }}
            ></i>
            <i className="fa fa-trash"
                onClick={() => {
                    //console.log("Delete");                    
                    updateProductItem({
                        action: 'DELETE',
                        item: this.props.item
                    }).then(resp => {
                        this.props.context.getProductData();
                    })
                }}></i>
                </span>
            }
        </div>
        )
    }
}