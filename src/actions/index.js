//default형식의 export가 아닌것을 불러오는 방법
//1st
//import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';

//2nd
import * as types from './ActionTypes';

//action을 반환하는 함수들(객체반환)
export function increment() {
    return { type: types.INCREMENT };
}
export function decrement() {
    return { type: types.DECREMENT};
}
export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color: color
    };
}
