import * as types from '../action/ActionTypes';

//리듀스는 상수와, 함수를 전달받는다
//초기값을 작성한다
const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color: action.color
        };
        
    } else {
        return state;
    }
}