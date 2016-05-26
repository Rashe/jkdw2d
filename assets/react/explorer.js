import React from 'react';
import Path from './path';
import FileType from './filetype';
import FolderType from './foldertype';

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: [this.props.data.name],
            mapa: []
        };
        this.updateView = this.updateView.bind(this);
    }

    generateArr(mapa) {
        let foldersArr = [],
            filessArr = [],
            data = this.props.data,
            tempData = data;

        if (mapa.length != 0) {
            mapa.map(function (item) {
                tempData = tempData.children[item];
            });
        }

        tempData.children.map(function (item) {
            (item.type == 'folder' ? foldersArr.push(item) : filessArr.push(item));
        });

        return (
            <section>
                <FolderType data={foldersArr} updateView={this.updateView} sort={sort}/>
                <FileType data={filessArr} sort={sort}/>
            </section>
        )
    }

    updateView(id, name) {
        let mapa, path;

        if (name) {
            mapa = this.state.mapa.concat(id);
            path = this.state.path.concat(name)
        } else {
            mapa = this.state.mapa.filter((_, i) => i !== this.state.mapa.length - 1);
            path = this.state.path.filter((_, i) => i !== this.state.path.length - 1);
        }

        this.setState({
            mapa: mapa,
            path: path
        });
    }

    render() {
        return (
            <div>
                <Path data={this.state.path} updatePath={this.updatePath}/>
                {this.generateArr(this.state.mapa)}
                {this.state.mapa.length > 0 ? <ToParent updateView={this.updateView}/> : ''}
            </div>
        )
    }
}

class ToParent extends React.Component {
    render() {
        return (
            <div className="goUp" onClick={this.props.updateView.bind(this, null, false)}>
                <i className="fa fa-level-up"></i>
                Go Up
            </div>
        )
    }
}

const sort = (props) => {
    props.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
};

export default Explorer;