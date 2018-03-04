import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router'

class Game extends Component {

    constructor(props) {
        super(props);
        this.gameClickHandler = this.gameClickHandler.bind(this);
    }

    gameClickHandler() {
        axios.get('http://localhost:3002/start')
            .then(response => console.log('this is res from axios', response));
    }

    render() {
        return (
            <button
                onClick={this.gameClickHandler}
            >Start button</button>
        );
    }
}
export default Game;