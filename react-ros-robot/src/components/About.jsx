import React, { Component } from "react";
import Image from 'react-bootstrap/Image'

class About extends Component {
    state = {};

    render(){
        return (
        <div>
            <h1 className = "mb-5">About</h1>
            <p className = "mb-5">
                This react app controls and monitors Ros-enabled robots 
                through a Web Interface
            </p>
            <Image src="https://media-exp1.licdn.com/dms/image/C4E0BAQGEjzBnGTORxQ/company-logo_200_200/0/1603982768208?e=2159024400&v=beta&t=Jh7DBr13qhTVjVKR1NGuc_lT61P2oF_-_WdnWLyXXOU" roundedCircle />
            <hr></hr>
        </div>
        
        );
    }
}

export default About;



