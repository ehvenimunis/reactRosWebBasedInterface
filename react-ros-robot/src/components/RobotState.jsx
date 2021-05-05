import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"
import Config from '../scripts/config';
import * as Three from "three";

class RobotState extends Component {
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

    componentDidMount(){
        this.getRobotState();
    }

    getRobotState(){
        // pose subscriber
        var pos_sub = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: Config.POSE_TOPIC,
            messageType: "geometry_msgs/PoseWithCovarianceStamped",
            
        });

        // pose callback
        pos_sub.subscribe((message)=>{
            this.setState({ x: message.pose.pose.position.x.toFixed(2) });
            this.setState({ y: message.pose.pose.position.y.toFixed(2) });
            this.setState({ orientation: this.getOrientationFromQuaternion(
                message.pose.pose.orientation
                ).toFixed(2), 
            });
        });

        // subscribe for velocity in odom
        var vel_sub = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: Config.ODOM_TOPIC,
            messageType: "nav_msgs/Odometry",
            
        });

        // vel callback
        vel_sub.subscribe((message)=>{
            this.setState({ linear: message.twist.twist.linear.x });
            this.setState({ angular: message.twist.twist.angular.z});

        });
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
                <Row>
                    <Col>
                        <h4 className="mt-4"> Position:</h4>
                        <p className="mt-0">x: {this.state.x}</p>
                        <p className="mt-0">y: {this.state.y}</p>
                        <p className="mt-0">Orientation: {this.state.orientation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="mt-4"> Velocities</h4>
                        <p className="mt-0">Linear: {this.state.linear}</p>
                        <p className="mt-0">Angular: {this.state.angular}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RobotState;
