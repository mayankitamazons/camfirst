import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
  Table,Form,FormGroup,Label,Input,CardFooter,Button} from 'reactstrap';
    import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';
class Models extends Component {
	  constructor() {
        super();
        this.state = {
          category_name: '',
          
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

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {category_name } = this.state;

        axios.post(BaseURL+'addcategory', {category_name })
          .then((result) => {
            //access the results here....
			 let responseJson = result;
    console.log(responseJson);
    if(responseJson.status==200){
      alert('New Category Added');
	  window.location.reload();
    }
    else {
      alert('Invlid Something Went Wrong');
    }
          });
      }
	  componentDidMount() {
    fetch(BaseURL+'modelslist', {
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
	    var data_model=JSON.stringify(this.state.data);
    return (
      <div className="animated fadeIn">


        <Row>
        <Col>
           <a href='http://54.208.166.55:3000/#/superadmin/addmodel'><Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add New Model</Button></a>
		   <br/>
		   <br/>
         </Col>
         </Row>
         <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Model Listing
              </CardHeader>
              <CardBody>
			  {data_model ?   <div><Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Unique Id </th>
                    <th> Name</th>
                    <th> Sex</th>
                    <th> Picture</th>
                    <th> Action</th>
                  </tr>
                  </thead>
                  <tbody>
				  {this.state.data.map(cat =>
						   <tr>
							<td>{cat._id}</td>
							<td>{cat.name}</td>
							<td>Female</td>
							<td> <img src={cat.pic} style={{height: '150px'}} className="img-avatar" alt="" /></td>
							<td>View Profile</td>
						  </tr>
				   )}
                 

                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav> </div>:" No Model is Added Yet"}
              
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Models;
