import {createStore, applyMiddleware} from 'redux';
import  myReducer from './reducer';
import thunk from 'redux-thunk';
const store = createStore(
    myReducer,
    applyMiddleware(thunk)
)

export default store;