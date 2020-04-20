import React from 'react';

const FooterSection = ()=>(
    <section id="footer" className="bg-warning">
    <div className="container py-5">
       
            <div className="row">
                <div className="col">
                    <h1 className="text-center text-uppercase
                        text-white">Contact Form
                    </h1>
                        <div className="titleborder bg-danger"></div>
                        
                    
                </div>
            </div>
        
        
        
            <div className="row">
                <div className="col my-3">
                    <div className="card card-body bg-white">
                        <div className="card-title">
                            <h1 className="text-center">New To This App</h1>
                        </div>
                        <form>
                        <div className="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" className="form-control" 	placeholder="..Please enter first 
                                name" id="fname" required/>
                        </div>
                        <div className="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" className="form-control" 	placeholder="..Please enter last
                                name" id="lname" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" className="form-control" 	placeholder="..Please enter email 
                                " id="email" required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary 
                                btn-block">Submit
                            </button>
                        </div>
                    </form>
                    </div>
                    
                
                </div>
                
               
            </div>
            <div className="footer-copyright text-center py-3 bg-secondary">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> Myreusme.com</a>
             </div>
    </div>
</section>
)

export default FooterSection;