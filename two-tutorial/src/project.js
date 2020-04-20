import React from "react";

const ProjectSection = ()=>(
   <section id="projects" className="bg-secondary">
       <div className="container-fluid py-5">
       <div className="row">
			<div className="col">
			<h1 className="text-center text-uppercase py-5">PROJECTS</h1>	
			<div className="titleborder bg-danger"></div>							 
			</div>
			</div>
            <div className="row py-3">
            <div className="col-sm-6 col-md-4">
				<img src="images/emp2.jpg" alt="undefined" className="img-fluid"/>
			</div> 
            <div className="col-sm-6 col-md-4">
				<img src="images/pic3.jpg" alt="undefined" className="img-fluid rounded"/>
			</div>
			<div className="col-sm-6 col-md-4 mx-auto">
				<img src="images/emp3.jpg" alt="undefined" className="img-fluid rounded-circle"/>
			</div>
			</div>
			<div className="row py-3">
            <div className="col-sm-6 col-md-4">
				<img src="images/emp2.jpg" alt="undefined" className="img-fluid"/>
			</div> 
            <div className="col-sm-6 col-md-4">
				<img src="images/pic3.jpg" alt="undefined" className="img-fluid rounded"/>
			</div>
			<div className="col-sm-6 col-md-4 mx-auto">
				<img src="images/emp3.jpg" alt="undefined" className="img-fluid rounded-circle"/>
			</div>
			</div>
       </div>
   </section>
)

export default ProjectSection;