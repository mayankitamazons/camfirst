import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../../style5.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

class HomeLayout extends Component {
  render() {
    return (
	<div>
         <HomeHeader />
        
		 
		 </div>
    );
  }
}

export default HomeLayout;
