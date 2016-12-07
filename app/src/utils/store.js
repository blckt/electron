import { createStore } from 'redux'
import reducers from './reducers'

import applyMiddleware from 'redux/lib/applyMiddleware';
import compose from 'redux/lib/compose';

// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState)
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
const store = configureStore();

export default store;