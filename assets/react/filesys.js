import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../data/data';
import Explorer from './explorer';
import Search from './search';

class FileSys extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (
            <section>
                <Explorer data={this.state.data} updateData={this.updateData}/>
                <Search data={this.state.data}/>
            </section>
        )
    }
}


ReactDOM.render(<FileSys data={data}/>,
    document.getElementById('app'));