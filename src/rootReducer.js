import { combineReducers } from 'redux'
import { localeReducer } from './locales/store';

const rootReducer = combineReducers({localeReducer})

export default rootReducer;
