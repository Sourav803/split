import React,{ Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Contactus extends Component{

    render(){
        return(
            <>
            <Jumbotron className="contact"/>
            <div></div>
            <div className="container">
          <div className="row">
          <h6>Contact info</h6><hr/>
          </div>
          <div className="row">
          <p>
            Sourav Sinha<br/>
          B.Tech <br/>
          Electronics and Communication Engineering<br/>
          2019-23<br/>
          <i className="fa fa-university"></i>: BIT Mesra, Ranchi<br/> 
          <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
		              
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:souravhzb3@gmail.com">
                         souravhzb3@gmail.com</a>
          </p>
          {
            window.screen.width>=700&&<>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </>
          }
          </div>
        </div>
        
        </>
         );   
    }
}

export default Contactus;
