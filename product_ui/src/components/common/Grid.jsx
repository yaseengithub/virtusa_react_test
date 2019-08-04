import React from 'react';

class Grid extends React.Component {
    render() {
        const {columns, data} = this.props;
        return (
            <div className="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            {columns.map(column => {
                                return <th scope="col">{column.header}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, indx) => {
                            return <tr>
                                {columns.map(col => {
                                    if(col.render){
                                        return <td>{col.render({
                                            item,
                                            col,
                                            context:this.props.context
                                        })}</td>;
                                    }
                                    return <td>{item[col.dataIndex]}</td>
                                }                                    
                                )}
                                </tr>
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Grid;