import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Socialmedia extends Component {
    render() {
        return (
            <div className="subheader mt-5  pt-5"  style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/people/final.png)",position:'relative' }} >
                <div className="container">
                   
                  
               
        <div className="icon-row"   >
       <div className="icon-wrapper" >
        <h2>Follow Us : </h2>
        </div>
          <div className="icon-wrapper" >
          
            <i className="fab fa-facebook " style={{fontSize:'30px'}}></i>
           
          </div>
          <div className="icon-wrapper">
          
            <i className="fab fa-twitter" style={{fontSize:'30px'}}></i>
          </div>
          <div className="icon-wrapper">
           
            <i className="fab fa-instagram" style={{fontSize:'30px'}}></i>
          </div>
          <div className="icon-wrapper">
            
            <i className="fab fa-linkedin" style={{fontSize:'30px'}}></i>
          </div>
        </div>

                       
                    </div>
                </div>
      
           
        );
    }
}

export default Socialmedia;