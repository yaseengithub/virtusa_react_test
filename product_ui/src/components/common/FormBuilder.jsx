import React from 'react';

class FormBuilder extends React.Component {
    constructor(props){
        super(props);
        const record = props.editrecord ? props.editrecord : {};
        this.state={
            ...record
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(name, value){
        this.setState({
            [name]: value
        })
    }
    constructFields(item){
        switch(item.form_type){
            case 'input': {
                return <div class="form-group row">
                            <label className="col-sm-2 col-form-label" for={item.dataIndex}>{item.header}</label>
                            <div class="col-sm-10">
                                <input type="input" className="form-control" id={item.dataIndex} 
                                    onChange={(e) => {
                                        this.handleChange(item.dataIndex, e.target.value)
                                    }}
                                    value={this.state[item.dataIndex]}
                                />
                            </div>
                        </div>
            }
            case 'textarea': {
                return <div class="form-group row">
                            <label className="col-sm-2 col-form-label" for={item.dataIndex}>{item.header}</label>
                            <div class="col-sm-10">
                                <textarea className="form-control" row="5"
                                    onChange={(e) => {
                                        this.handleChange(item.dataIndex, e.target.value)
                                    }}
                                >{this.state[item.dataIndex]}</textarea>
                            </div>
                        </div>
            }
            default: {
                return '';
            }
        }
    }
    render(){
        const {formfields} = this.props;
        return(
            <div>
                <div>{
                    formfields.map(item => {
                        return this.constructFields(item)
                    })
                }</div>
                <div className="mt-5 text-right">
                    <button className="btn btn-primary"
                        onClick={() => {this.props.savedata(this.state)}}
                    >Save</button>
                </div>
            </div>
        )
    }
}

export default FormBuilder;