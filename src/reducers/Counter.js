import * as types from '../actions/ActionTypes';

//리듀스는 상수와, 함수를 전달받는다
//1.초기값을 작성한다
const initialState = {
    number: 0,
    dummy: 'dumb',
    dumbObject: {
        d:0,
        u:1,
        m:2,
        b:3
    }
};
//리듀스는 함수기 때문에 함수를 반환한다()
export default function counter(state = initialState, action) { //기본인수 문법
    // if(typeof state === 'undefined') {
    //     return initialState;
    // }
    switch(action.type) {
        case types.INCREMENT:
            //return {number: state.number + 1}; 이렇게 할수도 있지만 immutability문법을쓴다
            return {
                    ...state, //state를 통쨰로 복사하는 문법
                    number: state.number + 1, //number값을 기존값 +1로 변경
                    dumbObject: {...state.dumbObject, u: 0 } //객체 일경우는 이렇게
                };
        case types.DECREMENT:
            return {
                    ...state,
                    number: state.number - 1
            };
        default:
            return state; //action타입중 SETCOLOR를 받았을때 실행   
    }

}
