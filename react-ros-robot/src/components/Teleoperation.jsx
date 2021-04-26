import React, { Component } from "react";
import { Joystick } from "react-joystick-component";
import Config from '../scripts/config';


class Teleoperation extends Component {

    state = { ros: null };

    constructor(){
        super();
        this.init_connection();
        this.handleMove = this.handleMove.bind(this);
    }

    init_connection(){
        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);
        
        this.state.ros.on("connection", () => {
            console.log("connection established in Teleoperation Companenet!");
            console.log(this.state.ros);
            this.setState({ connected: true});

        });

        this.state.ros.on("close", () => {
            console.log("connection closed!");
            this.setState({ connected: false});

            //try to reconnect every 3 seconds 
            setTimeout(() => {
                try{
                    this.state.ros.connect("ws://"+
                    Config.ROSBRIDGE_SERVER_IP+":"+
                    Config.ROSBRIDGE_SERVER_PORT+""
                    );
                }catch (error){
                    console.log("connection problem");
                }
            }, Config.RECONNECTION_TIMER);

        });
        try{
            this.state.ros.connect("ws://"+
            Config.ROSBRIDGE_SERVER_IP+":"+
            Config.ROSBRIDGE_SERVER_PORT+""
            );
        }catch (error){
            console.log("connection problem");
        }
    }

    // methods
    handleMove() {
        console.log("hanle move");
        var cmd_vel = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: Config.CMD_VEL_TOPIC,
            messageType: "geometry_msgs/Twist",
        });

        var twist = new window.ROSLIB.Message({
            linear:{
                x: 1.0,
                y: 0,
                z: 0,
            },
            angular:{
                x: 0,
                y: 0,
                z: 1,
            },
        });

        cmd_vel.publish(twist)
    }

    handleStop() {
        console.log("hanle stop");
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
