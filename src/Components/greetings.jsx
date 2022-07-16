import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 30
        }

    };

    render() {
        return (
            <div>
                Hola Mundo! y {this.props.name}
                <p> {this.state.age}</p>
                <button onClick={this.changeState}>cambiar</button>
            </div>
        );
    };


    changeState = () => {
        this.setState((prevState, prop) => (
            { 
                age: prevState.age + 1,
            }))
    }

}


Greetings.propTypes = {
    name: PropTypes.string,
};


export default Greetings;
