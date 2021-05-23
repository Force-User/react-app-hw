import {  applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import cardsReducer from './reducers/cardsReducer';
import profileReducer from './reducers/profileReducer';
const reducers = combineReducers({
	profile: profileReducer,
	auth: authReducer,
	cards: cardsReducer
});
const store = createStore(reducers,applyMiddleware(thunk));
export default store;
