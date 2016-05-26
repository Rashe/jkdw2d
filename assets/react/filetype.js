import React from 'react';

class FileType extends React.Component {
    generateArr(data) {
        let arr = [];
        this.props.sort(data);

        data.map(function (item, index) {
            arr.push(
                <div className="item img" key={index}>
                    <div><i className="fa fa-file-image-o"></i>
                        <div> {item.name} </div>
                    </div>
                </div>
            );
        });
        return arr;
    }

    render() {
        return (
            <section>
                {this.generateArr(this.props.data)}
            </section>
        )
    }
}

export default FileType;