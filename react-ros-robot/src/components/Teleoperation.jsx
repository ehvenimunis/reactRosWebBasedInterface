import React, { Component } from "react";
import { Joystick } from "react-joystick-component"

class Teleoperation extends Component {

    state = {};

    // methods
    handleMove() {

    }
    handleStop() {

    }

    render() {
        return <div>
            <Joystick
                size={100}
                baseColor="black"
                stickColor="orange"
                move={this.handleMove}
                stop={this.handleStop}
            ></Joystick>
        </div>;
    }
}

export default Teleoperation;
