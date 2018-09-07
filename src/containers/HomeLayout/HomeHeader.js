import React, { Component } from 'react';
    import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';
class HomeHeader extends Component {
	constructor() {
        super();
        this.state = {
          category_name: '',
		  data:[
		  ]
          
        };
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
		var model_data=JSON.stringify(this.state.data.model);
		var hair_model=JSON.stringify(this.state.data.hair);
		  return(
		  <div>
		   <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button type="button" id="sidebarCollapse" className="navbar-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
						
						<div>
						<ul className="nav navbar-nav navbar-left">
                                <li><a href="#">LIVE</a></li>
                            </ul>
						</div>

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Live Cams</a></li>
                                <li><a href="#">Awards</a></li>
                                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a></li>
								<li><a href="#">Get Credits</a></li>
								<li className="dropdown">
									<button className="btn btn-primary dropdown-toggle btn-primary-country" type="button" data-toggle="dropdown">EN
									<span className="caret"></span></button>
									<ul className="dropdown-menu">
									  <li><a href="#">HTML</a></li>
									  <li><a href="#">CSS</a></li>
									  <li><a href="#">JavaScript</a></li>
									</ul>
								</li>
								<li><a href="#">Login</a></li>
								<li className="li1"><a href="#">Join Now</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
</div>

        <div className="wrapper">
           
            <nav id="sidebar">
                <div className="sidebar-header">
				
					<div className="col-md-12 inlineHeaderSelector">
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">Girls</p></a>
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">Boys</p></a>
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">icon</p></a>
					</div>
                </div>

                <ul className="list-unstyled components">
                   { category_model ?                    <li className="active">
                        <a href="#category" data-toggle="collapse" aria-expanded="false">Category</a>
                        <ul className="collapse list-unstyled" id="category">
						{this.state.data.category.map(cat =>
						 <li key={cat._id}><a href="#">{cat.category_name}</a></li>
						)}  
                           
                            
                        </ul>
                    </li>   : ''}
					  { apper_model ?                    <li>
                        <a href="#apper" data-toggle="collapse" aria-expanded="false"> Apperences</a>
                        <ul className="collapse list-unstyled" id="apper">
						{this.state.data.apper.map(cat =>
						 <li key={cat._id}><a href="#">{cat.app_name}</a></li>
						)}
                           
                            
                        </ul>
                    </li>   : ''}
					  { wild_model ?                    <li>
                        <a href="#wild" data-toggle="collapse" aria-expanded="false">Willingness</a>
                        <ul className="collapse list-unstyled" id="wild">
						{this.state.data.wild.map(cat =>
						 <li key={cat._id}><a href="#">{cat.will_name}</a></li>
						)}
                           
                            
                        </ul>
                    </li>   : ''}

					
					 { hair_model ?                    <li>
                        <a href="#hair" data-toggle="collapse" aria-expanded="false">Hair</a>
                        <ul className="collapse list-unstyled" id="hair">
						{this.state.data.hair.map(cat =>
						 <li key={cat._id}><a href="#">{cat.hair_name}</a></li>
						)}  
                           
                            
                        </ul>
                    </li>   : ''}
				
                    <li>
                        <a href="#showtype" data-toggle="collapse" aria-expanded="false">Show Type</a>
                        <ul className="collapse list-unstyled" id="showtype">
                            <li><a href="#">Free Chat</a></li>
                            <li><a href="#">Private Chat</a></li>
                            <li><a href="#">Vip Show</a></li>
                            <li><a href="#">Vibra Toy</a></li>
                        </ul>
                    </li>
					
					<li>
                        <a href="#price" data-toggle="collapse" aria-expanded="false">Price</a>
                        <ul className="collapse list-unstyled" id="price">
                            <li><a href="#">500 $</a></li>
                            <li><a href="#">100 $</a></li>
                            <li><a href="#">250 $</a></li>
                        </ul>
                    </li>
					<li>
                        <a href="#age" data-toggle="collapse" aria-expanded="false">Age</a>
                        <ul className="collapse list-unstyled" id="age">
                            <li><a href="#">20 +</a></li>
                            <li><a href="#">18 +</a></li>
                            <li><a href="#">25 +</a></li>
                        </ul>
                    </li>
					

                </ul>

                
            </nav>

           
            <div id="content">

				
<div className="row">
 { model_data ?                <div className="row">
                      
                       
						{this.state.data.model.map(cat =>
						  	<div className="col-md-3 imageGridDiv">
		<div>
			<img src={cat.pic} className="img-responsive maximg"/>
			<p className="coverImgGridText">
				<span><i className="fa fa-circle fa-circle-red" aria-hidden="true"></i></span>
				<span>{cat.name}</span>
			</p>
		</div>
	</div>
						)}
                           
                            
                       
                    </div>   : ''}
	
	

	

	
	
	
	
</div>
				
            </div>
        </div>
		  </div>
		  );
	}
}


export default HomeHeader;
	