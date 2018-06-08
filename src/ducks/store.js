// Always import {createStore} and render
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
// import to use promiseMiddleware
import promiseMiddleware from 'redux-promise-middleware';

// put promiseMiddleware() ont a variable called middleware
let middleware = promiseMiddleware();

// Export createStore by default and pass it 'reducer' as it's arguement
export default createStore(reducer, applyMiddleware(middleware));