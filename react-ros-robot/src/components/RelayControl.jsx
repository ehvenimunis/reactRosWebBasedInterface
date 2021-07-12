import React, { Component } from "react";
import { Button } from "react-bootstrap"
import Config from '../scripts/config';

class RelayControl extends Component {
  state = {
    ros: null,
  };

  constructor() {
    super();
    this.init_connection();
    this.handleOpen_1 = this.handleOpen_1.bind(this);
    this.handleClose_1 = this.handleClose_1.bind(this);
    this.handleOpen_2 = this.handleOpen_2.bind(this);
    this.handleClose_2 = this.handleClose_2.bind(this);
    this.handleOpen_3 = this.handleOpen_3.bind(this);
    this.handleClose_3 = this.handleClose_3.bind(this);
    this.handleOpen_4 = this.handleOpen_4.bind(this);
    this.handleClose_4 = this.handleClose_4.bind(this);
    this.handleOpen_5 = this.handleOpen_5.bind(this);
    this.handleClose_5 = this.handleClose_5.bind(this);
    this.handleOpen_6 = this.handleOpen_6.bind(this);
    this.handleClose_6 = this.handleClose_6.bind(this);
    this.handleOpen_7 = this.handleOpen_7.bind(this);
    this.handleClose_7 = this.handleClose_7.bind(this);
    this.handleOpen_8 = this.handleOpen_8.bind(this);
    this.handleClose_8 = this.handleClose_8.bind(this);
  };

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    this.state.ros.on("connection", () => {
      console.log("connection established in Teleoperation Companenet!");
      console.log(this.state.ros);
      this.setState({ connected: true });

    });

    this.state.ros.on("close", () => {
      console.log("connection closed!");
      this.setState({ connected: false });

      //try to reconnect every 3 seconds
      setTimeout(() => {
        try {
          this.state.ros.connect("ws://" +
            Config.ROSBRIDGE_SERVER_IP + ":" +
            Config.ROSBRIDGE_SERVER_PORT + ""
          );
        } catch (error) {
          console.log("connection problem");
        }
      }, Config.RECONNECTION_TIMER);

    });
    try {
      this.state.ros.connect("ws://" +
        Config.ROSBRIDGE_SERVER_IP + ":" +
        Config.ROSBRIDGE_SERVER_PORT + ""
      );
    } catch (error) {
      console.log("connection problem");
    }
  }

  // methods
  handleOpen_1() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_1",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_1() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_1",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_2() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_2",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_2() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_2",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_3() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_3",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_3() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_3",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_4() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_4",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_4() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_4",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_5() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_5",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_5() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_5",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_6() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_6",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_6() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_6",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_7() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_7",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_7() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_7",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  handleOpen_8() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_8",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: true
    });
    relay_pub.publish(str);
  }
  handleClose_8() {
    var relay_pub = new window.ROSLIB.Topic({
      ros: this.state.ros,
      name: "/open_relay_8",
      messageType: 'std_msgs/Bool',
    });

    var str = new window.ROSLIB.Message({
      data: false
    });
    relay_pub.publish(str);
  }

  render() {
    return (
      <>
        <div className="mb-5"></div>
        <h5 className="mb-2">RELAY CONTROL</h5>
        <Button variant="success btn-sm" onClick={this.handleOpen_1}>Relay 1</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_1} >Relay 1</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_2} >Relay 2</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_2}>Relay 2</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_3}>Relay 3</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_3}>Relay 3</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_4}>Relay 4</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_4}>Relay 4</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_5}>Relay 5</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_5}>Relay 5</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_6}>Relay 6</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_6}>Relay 6</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_7}>Relay 7</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_7}>Relay 7</Button>{' '}
        <ol></ol>
        <Button variant="success btn-sm" onClick={this.handleOpen_8}>Relay 8</Button>{' '}
        <Button variant="danger btn-sm" onClick={this.handleClose_8}>Relay 8</Button>{' '}
      </>
    );
  }
}

export default RelayControl;