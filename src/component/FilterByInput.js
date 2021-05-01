import React from 'react'

class FilterByInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <label>Filter</label>
                <input type="text" value={this.props.filterChar} onChange={this.props.inputText}/>
                </div>
        )
    }
}

export default FilterByInput;