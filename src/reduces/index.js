import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

//리듀스가 2개일 경우 만드시 합치는 작업이 필요하다
const reducers = combineReducers({counter, ui});

export default reducers;