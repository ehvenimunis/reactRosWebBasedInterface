import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"
import Config from '../scripts/config';
import * as Three from "three";

var navigation = false;
var pathed = false;
var homing = false;
var MAP_WIDTH = (window.innerWidth)*0.65;
var MAP_HEIGHT = window.innerHeight - (window.innerHeight)*0.08;

class Navigation extends Component {
    state = {
        ros: null,
        x:0,
        y:0,
        orientation:0,
        linear:0,
        angular:0,
    };

    constructor(){
        super();
        this.init_connection();
    };

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

    /*  
        Bir component render edildikten hemen sonra çağrılır. 
        Uzak bir uç noktadan veri yüklemeniz gerekiyorsa, bu ağ isteğini başlatmak için iyi bir yerdir. 
    */
    componentDidMount(){ 
        this.getRobotState();
    }

    getRobotState(){
        
    }

    getOrientationFromQuaternion(ros_orientation_quaterternion){
        var q = new Three.Quaternion(
                ros_orientation_quaterternion.x, 
                ros_orientation_quaterternion.y, 
                ros_orientation_quaterternion.z, 
                ros_orientation_quaterternion.w
        );
            // convert roll pitch yaw
        var RPY = new Three.Euler().setFromQuaternion(q);
        return RPY["_z"] + (180 / Math.PI);
    }

    render() {
        return(
            <div>
            </div>
        );
    }
}

export default Navigation;
