import React, { Component } from "react";
import Image from 'react-bootstrap/Image'

class About extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1 className="mb-5">About</h1>
                <p className="mb-5">
                    This react app controls and monitors Ros-enabled robots
                    through a Web Interface
                </p>
                <Image src="https://salihspacehome.files.wordpress.com/2019/05/ek-ac3a7c4b1klama-2019-05-11-125316.jpg" roundedCircle />
                <hr></hr>
            </div>

        );
    }
}

export default About;



