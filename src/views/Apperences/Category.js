import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
  Table,Form,FormGroup,Label,Input,CardFooter,Button} from 'reactstrap';

class Category extends Component {
  render() {
    return (
      <div className="animated fadeIn">


        <Row>
        <Col>
        <Card>
          <CardHeader>
            <strong>Apperencess </strong> Add
          </CardHeader>
          <CardBody>
            <Form action="" method="post" inline>
              <FormGroup className="pr-1">
                <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                <Input type="text" id="exampleInputName2" placeholder="Category Name" required />
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
         <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Apperencess List
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Sr No </th>
                    <th>Category Name</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Master</td>
                  </tr>

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
