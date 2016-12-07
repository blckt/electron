import React, { Component } from 'react';


import Provider from 'react-redux/lib/components/provider';
import Router from 'react-router/lib/Router';
const store = require('./utils/store');
const routes = require('./routes')
const history =  require('./utils/history');

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={route} />
            </Provider>
        )
    }
}
