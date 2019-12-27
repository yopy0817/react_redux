import React from 'react';
import PropTypes from 'prop-types';

class Control extends React.Component {

    render() {
        return (<div>
            <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onMinus}>-</button>
            <button onClick={this.props.onRandomColor}>Random Color</button>
        </div>);
    }
}

Control.propTypes = {
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
    onRandomColor: PropTypes.func
}
Control.defaultProps = {
    onPlus: () => {console.log("에러")},
    onMinus: () => {console.log("에러")},
    onRandomColor: () => {console.log("에러")}
}

export default Control;