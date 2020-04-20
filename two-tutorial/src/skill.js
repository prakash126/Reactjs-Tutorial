import React from 'react';

const SkillSection = ()=>{
    return(
        <section id="skills">
				<div className="container-fluid bg-primary">
					
					<div className="row">
						<div className="col">
							<h1 className="text-center text-uppercase py-5"><strong>SKILLS-SETS</strong>
								<div className="titleborder bg-danger"></div>
							</h1>
							
							 
						</div>
					</div>
					
					
					<div className="row">
						<div className="col-md-6 col-lg-3 text-center 
							my-3">
							<i className="fab fa-node-js fa-5x text-danger"></i>
							<h3 className="text-uppercase my-2">node js</h3>
							<p className="text-muted">Lorem Ipsum is
								simply dummy text of the printing and typesetting industry.
							</p>
							<a href="#" className="btn 
								btn-outline-danger btn-block text-uppercase">Click Here</a>
						</div>
						<div className="col-md-6 col-lg-3 	
							text-center 
							my-3">
							<i className="fab fa-html5 fa-5x text-danger"></i>
							<h3 className="text-uppercase my-2">html5</h3>
							<p className="text-muted">Lorem Ipsum is
								simply dummy text of the printing and typesetting industry.
							</p>
							<a href="#" className="btn 
								btn-outline-danger btn-block text-uppercase">Click Here</a>
						</div>
						<div className="col-md-6 col-lg-3
							text-center 
							my-3">
							<i className="fab fa-css3 fa-5x text-danger"></i>
							<h3 className="text-uppercase my-2">css3</h3>
							<p className="text-muted">Lorem Ipsum is
								simply dummy text of the printing and typesetting industry.
							</p>
							<a href="#" className="btn 
								btn-outline-danger btn-block text-uppercase">Click Here</a>
						</div>
						<div className="col-md-6 col-lg-3 
							text-center 
							my-3">
							<i className="fab fa-js fa-5x text-danger"></i>
							<h3 className="text-uppercase my-2">js</h3>
							<p className="text-muted">Lorem Ipsum is
								simply dummy text of the printing and typesetting industry.
							</p>
							<a href="#" className="btn 
								btn-outline-danger btn-block text-uppercase">Click Here</a>
						</div>
						
					</div>
				</div>
			</section>
    );
}

export default SkillSection;