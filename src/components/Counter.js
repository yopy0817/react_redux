import React from 'react';

import Value from './Value';
import Control from './Control';

import {connect} from 'react-redux'; //리덕스의 작업을 편리하게 해주는? connect -> 아래에서 함수처리
import * as actions from '../actions';

class Counter extends React.Component {

    setRandomColor = () => {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];
        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }

        return (<div style={style}>
            <Value number={this.props.number}/>
            <Control onPlus={this.props.handleIncrement}
                     onMinus={this.props.handleDecrement}
                     onRandomColor={this.setRandomColor}
            />
        </div>);
    }
}

const mapStateToProps = (state) => { //redux에서 관리하는 상태를 props로 매핑해준다
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}
const mapDispatchToProps = (dispatch) => { //reducer에 정의해둔 핸들러를 props로 매핑해준다
    return { //반환으로 객체를 보낸다 함수명 : () =>
        handleIncrement: () => {dispatch(actions.increment() )},
        handleDecrement: () => {dispatch(actions.decrement() )},
        handleSetColor: (color) => {dispatch(actions.setColor(color) )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //connect()는 또다른 함수를 반환한다
//export default Counter;
