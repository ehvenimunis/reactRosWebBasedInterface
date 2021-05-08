import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"
import Config from '../scripts/config';


var navigation = false;
var pathed = false;
var homing = false;
var MAP_WIDTH = (window.innerWidth)*0.65;
var MAP_HEIGHT = window.innerHeight - (window.innerHeight)*0.08;

class Navigation extends Component {
    state = {
        ros: null,
    };

    ZoomInClick(){
        console.log("alg111o");
    }

    ZoomOutClick(){
        console.log("alg111o");
    }

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


    render() {
        return(
            <>
                <Button variant="warning" onClick={this.ZoomInClick}>Zoom In</Button>{' '}
                <Button variant="warning" onClick={this.ZoomOutClick}>Zoom Out</Button>{' '}
            </>
        );
    }


}

export default Navigation;