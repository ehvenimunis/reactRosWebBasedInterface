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

    constructor(){
        super();
        this.init_connection();
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
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

    // methods
    handleOpen() {
        console.log("hanle open");

        var relay_pub = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: "/r5/open_relay",
            messageType: 'std_msgs/Bool',
          });

          var str = new window.ROSLIB.Message({
            data : true
          });


        relay_pub.publish(str);

    }

    handleClose() {
        console.log("hanle close");

        var relay_pub = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: "/r5/open_relay",
            messageType: 'std_msgs/Bool',
          });

          var str = new window.ROSLIB.Message({
            data : false
          });


        relay_pub.publish(str);
    }

    render() {
        return(
            <>
                <Button variant="warning" onClick={this.handleOpen}>Zoom In</Button>{' '}
                <Button variant="warning" onClick={this.handleClose}>Zoom Out</Button>{' '}
            </>
        );
    }


}

export default Navigation;