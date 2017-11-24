import React, {Component} from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, FormGroup, FormControl, Label, ControlLabel, Panel, Button, Well} from 'react-bootstrap';

class Contact extends Component{
  render(){
    return(
      <div className='container' style={{marginBottom: '100px'}}>
        <Row>
          <h3> Contact Us</h3><br />


          <Col xs={12} sm={12}>
          <h4>Information</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum tortor ut felis pretium rhoncus. Nulla egestas felis urna, eu sagittis mi malesuada et. Morbi malesuada mollis semperLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum tortor ut felis..
          </p>
          </Col>

          <Col xs={12} sm={6}>
          <h4>Formulaire</h4>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl placeholder='Enter your name' /><FormControl.Feedback/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl placeholder='Enter your email adress'/><FormControl.Feedback/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Message</ControlLabel>
              <FormControl placeholder='Enter your message'/><FormControl.Feedback/>
            </FormGroup>
            <Button bsStyle='primary'> Envoyer </Button>
          </Col>
        </Row>


      </div>
    )
  }
}

export default Contact;
