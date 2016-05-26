import React from 'react';

class Path extends React.Component {
    generateArr(data) {
        let arr = [];
        data.map(function (item, index) {
            arr.push(<span key={index}>/{item}</span>);
        });
        return arr;
    }

    render() {
        return (
            <div className="path">
                {this.generateArr(this.props.data)}
            </div>
        )
    }
}

export default Path;