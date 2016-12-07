import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TreeView from '../TreeView';
class Main extends React.Component {
  static propTypes = {

  }
  render = () => (
      <div className="App">
        <TreeView></TreeView>
      </div>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default Main
