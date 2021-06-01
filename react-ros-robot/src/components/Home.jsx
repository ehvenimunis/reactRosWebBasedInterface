import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState"
import Navigation from "./Navigation"
import RelayControl from "./RelayControl"
import { Row, Col, Container, Button } from "react-bootstrap"
import Config from '../scripts/config';

class Home extends Component {
    state = {

    };
    render() {
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
                            <RobotState />
                            <RelayControl />
                        </Col>

                        <Col>
                            <h4>MAP</h4>
                            <Navigation id='random' width={Config.MAP_WIDTH} height={Config.MAP_WEIGHT} topic={Config.MAP_TOPIC} serverName={Config.MOVE_BASE} />


                        </Col>

                    </Row>
                </Container>

            </div>
        );
    }

}

export default Home;
