import {combineReducers} from 'redux'; //합치기 기능 제공
import counter from './Counter';
import ui from './Ui';

//리듀스가 2개일 경우 만드시 합치는 작업이 필요하다
const reducers = combineReducers({counter, ui});

export default reducers;