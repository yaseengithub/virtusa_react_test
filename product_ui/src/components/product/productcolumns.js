import React from 'react';  
import Actions from './Actions';

export const productcolumns = [{
    header: "Product Name",
    dataIndex: 'prod_name',
    form_type: 'input',
    form_mandate: true,
    form_hide: false
},{
    header: "Created By",
    dataIndex: 'created',
    form_hide: true
},{
    header: "Comments",
    dataIndex: 'comments',
    form_type: 'textarea',
    form_mandate: false,
    form_hide: false
},{
    header: "Actions",
    render: (props) => (<Actions {...props}/>)
}]