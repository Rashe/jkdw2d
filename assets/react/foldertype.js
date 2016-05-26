import React from 'react';

class FolderType extends React.Component {

    generateArr(data, updateView) {
        let arr = [];
        this.props.sort(data);
        data.map(function (item, index) {
            arr.push(
                <div className="item folder" key={index}
                     onDoubleClick={updateView.bind(this, index, item.name, true)}>
                    <i className="fa fa-folder"></i>
                    <div>{item.name}</div>
                </div>
            );
        });
        return arr;
    }

    render() {
        return (
            <section>
                {this.generateArr(this.props.data, this.props.updateView)}
            </section>
        )
    }
}

export default FolderType;