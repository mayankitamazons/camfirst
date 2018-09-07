import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const BaseURL = 'http://54.164.253.71:5000/api/';
const type = 'dashboard';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      data:[],
      dropdownOpen: false,
      radioSelected: 2,
    };

  }
  componentDidMount() {
    fetch(BaseURL+type, {
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
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
     const { modeldata } = this.state.data;
     var recent_model=this.state.data.recent_model;
  var recent_model=JSON.stringify(recent_model);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">{JSON.stringify(this.state.data.Category)}</div>
                <div>Category Registerd</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>

              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">{JSON.stringify(this.state.data.model)}</div>
                <div>Model Registerd</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>

              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">{JSON.stringify(this.state.data.wild)}</div>
                <div>Wild Registerd</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>

              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">5</div>
                <div>Hair Category</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>

              </div>
            </Card>
          </Col>





        </Row>




        <Row>
          <Col>

            <Card>

              <CardBody>
                  <h6>Recent Registerd Model</h6>
                    {recent_model ? <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                      <thead className="thead-light">
                      <tr>
                        <th className="text-center"><i className="icon-people"></i></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Sex</th>


                      </tr>
                      </thead>
                      <tbody>

                          {this.state.data.recent_model.map(mod =>
                            <tr key={mod._id}>
                              <td className="text-center">
                                <div className="avatar">
                                  <img src={mod.pic} className="img-avatar" alt="" />
                                  <span className="avatar-status badge-success"></span>
                                </div>
                              </td>
                              <td>
                                <div>{mod.name}</div>

                              </td>
                              <td>
                                {mod.category}
                              </td>
                              <td>
                                  {mod.gender}
                              </td>

                            </tr>
                            )}




                      </tbody>
                    </Table> : 'Not Model Registerd yet'}

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
