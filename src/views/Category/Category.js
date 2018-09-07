import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
  Table,Form,FormGroup,Label,Input,CardFooter,Button} from 'reactstrap';
    import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';    
    class Category extends Component {
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
    fetch(BaseURL+'categorylist', {
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
		   var category_model=JSON.stringify(this.state.data);
        const { category_name } = this.state;
        return (
		<div>
		<Row>
        <Col>
        <Card>
		 <CardHeader>
            <strong>Category</strong> Add New Category
          </CardHeader>
		<CardBody>
          <form onSubmit={this.onSubmit}>
		   <FormGroup className="pr-1">
            <input
              type="text"
              name="category_name"
			   placeholder="Enter Category Name" required
              value={category_name}
              onChange={this.onChange}
            />
           
            <button type="submit">Add</button>
			 </FormGroup>
          </form>
		  </CardBody>
		  </Card>
		  </Col>
		  </Row>
		 
		  
		   <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Category List
              </CardHeader>
              <CardBody>
              { category_model ?   <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Sr No </th>
                    <th>Category Name</th>

                  </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map(cat =>
                    <tr key={cat._id}>
                    <td  >{cat._id}</td>
                      <td>{cat.category_name}</td>

                    </tr>
                    )}

                  </tbody>
                </Table>: "No Category Added yet" }

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
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
		  </div>
        );
      }
    }
  export default Category;