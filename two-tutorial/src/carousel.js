import React from 'react';

const CarouselSection = ()=>(
    <section id="carousel" className="bg-primary">
					<div className="container py-2">
						
						
							
							<div className="row">
								<div className="col">
									<h1 className="text-center text-uppercase text-white"><strong>Carousel</strong>
										<div className="titleborder bg-warning"></div>
									</h1>
								</div>
							</div>
						
								<div className="bd-example">
									  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
										<ol className="carousel-indicators">
										  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
										  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
										  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
										  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
										</ol>
										<div className="carousel-inner" role="listbox">
										  <div className="carousel-item active">
											<img className="d-block tales" src="images/emp2.jpg" alt="First slide"/>
											<div className="carousel-caption d-none 
												d-md-block">
											  <h3>First slide label</h3>
											  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
											</div>
										  </div>
										  <div className="carousel-item">
											<img className="d-block tales" src="images/pic1.jpg" alt="Second slide"/>
											<div className="carousel-caption d-none 
												d-md-block">
											  <h3>Second slide label</h3>
											  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										  </div>
										   <div className="carousel-item">
											<img className="d-block tales" src="images/emp3.jpg" alt="Third slide"/>
											<div className="carousel-caption d-none 
												d-md-block">
											  <h3>Third slide label</h3>
											  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										  </div>
										   <div className="carousel-item">
											<img className="d-block tales" src="images/pic2.jpg" alt="Forth slide"/>
											<div className="carousel-caption d-none 
												d-md-block">
											  <h3>Forth slide label</h3>
											  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										  </div>
										</div>
										<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
										  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
										  <span className="sr-only">Previous</span>
										</a>
										<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
										  <span className="carousel-control-next-icon" aria-hidden="true"></span>
										  <span className="sr-only">Next</span>
										</a>
									  </div>
							</div>
					</div>
				</section>
)

export default CarouselSection;