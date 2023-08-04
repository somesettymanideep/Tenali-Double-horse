import React, { Component } from 'react';

class Socialmedia extends Component {
  render() {
    return (
      <div className="social-icons mb-5 mt-3"style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
      <span className="title text-center text-dark" style={{fontFamily:'Helvetica',lineHeight:'48px',fontWeight:'700'}}> Follow us:</span>
      <ul className="wrapper" >
        <li className="icon facebook-m">
          <span className="tooltip">Facebook</span>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </li>
        <li className="icon twitter-m">
          <span className="tooltip">Twitter</span>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </li>
       
        <li className="icon youtube-m">
          <span className="tooltip">Youtube</span>
          <span>
            <i className="fab fa-youtube"></i>
          </span>
        </li>
        <li className="icon linked-m">
          <span className="tooltip">Linkedin</span>
          <span>
            <i className="fab fa-linkedin"></i>
          </span>
        </li>
      </ul>
      </div>
    );
  }
}

export default Socialmedia;
