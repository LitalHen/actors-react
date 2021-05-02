import React from 'react';
import Select from 'react-select';

class SortActor extends React.Component{
    constructor(props){
        super(props);

        this.state={selectedOption: ''}
    }
   
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

    render(){
        const options = [
            { value: 'firstName', label: 'First Name' },
            { value: 'lastName', label: 'Last Name' },
            { value: 'age', label: 'Age' },
          ];
           const { selectedOption } = this.state;
        return(
            <div>
                <label> Sort By</label>
        <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            </div>
        )
    }
}

export default SortActor;