import React, {Component} from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState"
import RelayControl from "./RelayControl"
import {Row, Col, Container, Button} from "react-bootstrap"

class Map extends Component {
    state = {
        
    };
    render(){
        return (
        <div> 
            <Container>
                <h1 className="text-center mt-3">  Robot Control Page</h1>
                <Row>
                    <Col>
                        <Connection />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Teleoperation />
                        <RelayControl />
                    </Col>
                </Row>
            </Container> 

        </div>
        );
    }

}
export default Map;
