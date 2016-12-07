import combineReducers from 'redux/lib/combineReducers';
import main from '../Main/reducer';

import { routerReducer as routing } from 'react-router-redux'

const App = combineReducers({
    routing,
    main
});
export default App;
