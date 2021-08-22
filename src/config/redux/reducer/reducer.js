import { combineReducers } from 'redux';
import globalReducer from './GlobalReducer';
import homeReducer from './HomeReducer';
import createBlogReducer from './createBlogReducer';

const reducer = combineReducers({ homeReducer, globalReducer, createBlogReducer });

export default reducer;