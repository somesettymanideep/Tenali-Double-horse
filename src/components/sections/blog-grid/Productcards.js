import React, { Component } from 'react';


 class  Cards  extends Component {
    render() {
        return (
       
           
          
        <section id="gallery">
          <div class="container">
            <div class="row">
            <div class="col-lg-6 mb-4">
            <div class="card alignments" style={{minHeight:'400px'}}>
            <img src={process.env.PUBLIC_URL + "assets/img/prods-sm/Tenali-Double-Horse-Urad-Gota-300x300.png"} style={{width:'300px',height:'300px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Urad gota</h5>
               
                <a href={""} className="btn-custom btn-sm">Read more</a>
               
              </div>
             </div>
            </div>
          <div class="col-lg-6 mb-4">
          <div class="card black alignments"  style={{minHeight:'400px'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Black-Gram-Rounds-300x300.png"} style={{width:'300px',height:'300px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Black gram</h5>
              
                <a href={""} className="btn-custom btn-sm">Read more</a>
              
              </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
          <div class="card white alignments"  style={{minHeight:'400px'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/tenali-double-horse-idly-rava-300x300.png"}  style={{width:'300px',height:'300px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">idly Rava</h5>
               
                <a href={""} className="btn-custom btn-sm">Read more</a>
               
              </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4 ">
            <div class="card yellow alignments"  style={{minHeight:'400px'}} >
            <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-horse-Moong-Dal-300x300.png"}  style={{width:'300px',height:'300px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Moong Dal</h5>
               
                <a href={""} className="btn-custom btn-sm " >Read more</a>
               
              </div>
             </div>
            </div>
          </div>
        </div>
        </section>
        
            
        );
    }
}

export default Cards;