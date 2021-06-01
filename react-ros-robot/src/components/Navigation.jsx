import React, { Component } from "react";
import NAV2D from './vendor/nav2d.js'
import ROS2D from './vendor/ros2d.js'
import PropTypes from 'prop-types';
import ROSLIB from 'roslib'

class Navigation extends Component {

  componentDidMount() {
    const ros = this.props.ros;

    // Create the main viewer.
    const viewer = new ROS2D.Viewer({
      divID: this.props.id,
      width: this.props.width,
      height: this.props.height
    });

    // Setup the nav client.
    var nav = NAV2D.OccupancyGridClientNav({
      ros: ros,
      rootObject: viewer.scene,
      topic: this.props.topic,
      viewer: viewer,
      serverName: this.props.serverName
    });
  }

  render() {
    return (
      <>
        <div id={this.props.id} />
      </>
    );
  }
}

Navigation.defaultProps = {
  ros: new ROSLIB.Ros({
    url: 'ws://localhost:9090'
  }),
  id: 'nav2d',
  width: 500,
  height: 500,
  topic: '/map',
  serverName: '/move_base'
};

Navigation.propTypes = {
  ros: PropTypes.object,
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  topic: PropTypes.string,
  serverName: PropTypes.string
}

export default Navigation;