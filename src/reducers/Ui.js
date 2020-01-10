import * as types from '../actions/ActionTypes';

//리듀스는 상수와, 함수를 전달받는다
//초기값을 작성한다
const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) { //엑션이 컬러일 경우 변경해서 실행
        return {
            color: action.color
        };
        
    } else { //Conter엑션일 경우는 그대로반환
        return state;
    }
}