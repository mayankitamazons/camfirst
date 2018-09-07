import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
  import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';
class Addmodel extends Component {
	 constructor() {
        super();
        this.state = {
          category_name: '',
		  data:[]
          
        };
      }

      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }
	 componentDidMount() {
    fetch(BaseURL+'homeapi', {
   method: 'POST'
   })
   .then((response) => response.json())
   .then((res) => {
        if(res.code==200){

            this.setState({data:res.data});

        }
        else {
          console.log('something went wrong ');
          return false;
        }
   })
   .catch((error) => {

   });

}
  render() {
	  var category_model=JSON.stringify(this.state.data.category);
		var apper_model=JSON.stringify(this.state.data.apper);
		var wild_model=JSON.stringify(this.state.data.wild);
    return (
      <div className="animated fadeIn">
      <Row>
        <Col>
            <a href='http://54.208.166.55:3000/#/superadmin/models'><Button type="submit" size="sm" color="primary">
			<i className="fa fa-dot-circle-o"></i> List all  Model</Button></a>
		   <br/>
		   <br/>
         </Col>
         </Row>
          <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add Model Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Model Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="model name" />
                      
                    </Col>
                  </FormGroup>
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Category</Label>
                    </Col>
                    <Col md="9">
                      
					  {category_model ? <Input type="select" name="multiple-select" id="multiple-select" multiple> 
					     {this.state.data.category.map(cat =>
						   <option key={cat._id} value={cat._id}>{cat.category_name}</option>
						 
						)}    
					   </Input> : ''}
                       
                    </Col>
                  </FormGroup>
				  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Willingness</Label>
                    </Col>
					 <Col md="9">
                      
					  {wild_model ? <Input type="select" name="multiple-select" id="multiple-select" multiple> 
					     {this.state.data.wild.map(cat =>
						   <option key={cat._id} value={cat._id}>{cat.will_name}</option>
						 
						)}    
					   </Input> : ''}
                       
                    </Col>
                   
                  </FormGroup>
				  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Apperences</Label>
                    </Col>
                    
					<Col md="9">
                      
					  {apper_model ? <Input type="select" name="multiple-select" id="multiple-select" multiple> 
					     {this.state.data.apper.map(cat =>
						   <option key={cat._id} value={cat._id}>{cat.app_name}</option>
						 
						)}    
					   </Input> : ''}
                       
                    </Col>
                  </FormGroup>
				    <FormGroup row>
				  
                    <Col md="3">
                      <Label htmlFor="password-input">UserName/email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="password-input" name="password-input" placeholder="Username" autoComplete="new-password" />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
				  
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Please enter a complex password</FormText>
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">About</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="About Model..." />
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Model pic</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  
                   
                </Form>    
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
           
          </Col>   
          
        </Row>
      </div>

    );
  }
}

export default Addmodel;
