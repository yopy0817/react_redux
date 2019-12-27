import * as types from '../action/ActionTypes';

//리듀스는 상수와, 함수를 전달받는다
//초기값을 작성한다
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

export default function counter(state = initialState, action) { //기본인수 문법
    // if(typeof state === 'undefined') {
    //     return initialState;
    // }
    switch(action.type) {
        case types.INCREMENT:
            //return {number: state.number + 1}; 이렇게 할수도 있지만 immutability문법을쓴다
            return {
                    ...state, //state복사
                    number: state.number + 1, //number값을 기존값 +1로 변경
                    dumbObject: {...state.dumbObject, u: 10 } //객체 일경우는 이렇게
                };
        case types.DECREMENT:
            return {
                    ...state,
                    number: state.number -1
            };
        default:
            return state;    
    }



    return state;
}
