import React from 'react';
const style = require('./TreeView.css')

const {dialog} = require('electron').remote

const TreeViewService = require('./service')
const service = new TreeViewService();
const $ = require('jquery');

function mapList(list) {
  const mList = list.map((item, index) => {
    if (item.file) {
      return (<li key={index + item.folder}> <span>{item.file}</span></li>)
    }
    if (item.files) {
      return (<li className='dropdown' key={index + item.folder}> <span>{item.folder}</span> {mapList(item.files)}</li>)
    }
  })
  return <ul >{mList}</ul>;
}

function createList(list) {
  return function (props) {
    return (mapList(list,''))
  };
}

function toggle() {
  var ul = $(this.lastChild);
  $(this).find('ul').toggle()
}

class TreeView extends React.Component {
  state = {
    tree: []
  }
  chooseFolder() {
    var input = document.querySelector("#folder_chooser");
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, (result) => {
      if (result[0])
        service.getFiles(result[0]).
          then(data => {
            this.setState({
              tree: data
            })
          })
    })
  }
  componentDidUpdate() {
    $('li.dropdown').off('click', toggle);
    $('li.dropdown').click(toggle);

  }
  render = () => {
    const List = createList(this.state.tree)

    return (<div className="treeView">
      <List />
      <button onClick={this.chooseFolder.bind(this)}>Choose Folder</button>

      <input type="file" className='hidden' id="folder_chooser" />
    </div>)
  }
}

export default TreeView
