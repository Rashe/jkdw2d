import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            path: ''
        };
        this.updateInputVal = this.updateInputVal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateInputVal(e) {
        this.setState({inputVal: e.target.value});
    }

    handleClick() {
        this.setState({
            path: this.search(this.props.data, this.state.inputVal)
        });
    }

    showPath() {
        let data = this.props.data,
            mapa = this.state.path,
            tempData = data,
            path = '';

        if (mapa.length != 0) {
            mapa.map(function (item) {
                if (typeof item == 'string') {
                    path += '/'+ item;
                    return;
                }
                path += '/' + tempData.name;
                tempData = tempData.children[item];
            });
        }
        return (
            path
        )
    }

    search(data, name) {
        if (data.name == name) {
            let path = [data.name];
            return path;
        } else if (data.children != null) {
            let result = null;
            for (let i = 0; result == null && i < data.children.length; i++) {
                result = this.search(data.children[i], name);
                if (result) {
                    result.unshift(i);
                    return result;
                }
            }
        }
        return null;
    }

    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search" onChange={this.updateInputVal}/>
                <button onClick={this.handleClick}>Search</button>
                <label> {this.state.path ? this.showPath() : ''}</label>
            </div>
        )
    }
}

export default Search;


