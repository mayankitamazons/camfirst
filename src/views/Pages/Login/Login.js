import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../../service/PostData';
class Login extends Component {
  constructor(){
  super();
  this.state = {
  username: '',
  password: '',
  redirectToReferrer: false,
  submitted: false
  };
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
  }
  login() {
 //API Action Here
   this.setState({ submitted: true });
     if(this.state.username && this.state.password){
    PostData('login',this.state).then((result) => {
    let responseJson = result;
    //console.log(responseJson);
    if(responseJson.code==200){
    sessionStorage.setItem('userData',JSON.stringify(responseJson));
    this.setState({redirectToReferrer: true});
    }
    else {
      alert('Invlid Login Detail');
    }
    });
    }
}

onChange(e){
 this.setState({[e.target.name]:e.target.value});
}

  render() {
    const errStyle = {
  color:"#a94442"
};
      const { username, password, submitted } = this.state;
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
return (<Redirect to={'/dashboard'}/>)
}
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>

                      <h1>Camwish</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" onChange={this.onChange} name="username" autoComplete="username" required />

                      </InputGroup>
                      {submitted && !username &&
                       <p style={errStyle}>Username is required</p>
                      }
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" onChange={this.onChange} autoComplete="current-password" required  />

                      </InputGroup>
                      {submitted && !password &&
                       <p style={errStyle}>Password is required</p>
                      }
                      <Row>
                        <Col xs="6">

                           <Input color="primary" className="px-4 btn-primary" type="submit" value="Login" onClick={this.login}/>
                        </Col>

                      </Row>

                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Super admin panel</h2>

                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
