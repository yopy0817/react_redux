import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux'; //리덕스를 사용할때는 createStore를 사용한다
import reducers from './reducers';

import {Provider} from 'react-redux'; //리엑트 Redux를 편하게 사용하게 하는 react-redux

const store = createStore(reducers); //store가 만들어 진것이다......

/*
import * as actions from './actions';
console.log(store.getState());
//store.subscribe( () => console.log(store.getState()) ); // store가 변화가 있을 때 subscribe 함수를 실행한다.
const unsubsribe = store.subscribe( () => console.log(store.getState()) ); // store가 변화가 있을 때 subscribe 함수를 실행한다.

store.dispatch(actions.increment() ); //dispatch함수를 통해 action 의 함수를 실행시킨다.
store.dispatch(actions.increment() );
store.dispatch(actions.decrement() );
store.dispatch(actions.setColor([200, 200, 200]) );
unsubsribe(); //콘솔 중단? (콘솔창이 안뜬다?)
store.dispatch(actions.setColor([210, 210, 210]) );
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);