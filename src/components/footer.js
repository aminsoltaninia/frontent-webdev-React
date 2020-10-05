
import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        
        <div className="footer">
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2 ">
                        <h5>link</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutUS">about us</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="ContactUS">ContactUs</Link></li>
                        
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>address</h5>
                        <address>
                        Here's the example 2 footer material <br/>
                        <i class="fa fa-phone"></i> 5665566565 <br/>
                        <i class="fa fa-fax"></i> 5665566565 <br/>
                        <i class="fa fa-envelope"></i> aminsoltani.nia@gmail.com
                    </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                                    <div className="text-center">
                                        <a className="btn btn-social-icon btn-google" href="www.fantonistore.com"><i className="fa fa-google-plus"></i></a>
                                        <a className="btn btn-social-icon" href="www.fantonistore.com"><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon" href="www.fantonistore.com"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-instagram" href="www.fantonistore.com"><i className="fa fa-instagram"></i></a>
                                        <a className="btn btn-social-icon" href="www.fantonistore.com"><i className="fa fa-linkedin"></i></a>
                                    </div>
                    </div>
                </div>
                <hr/>

                <div className="row justify-content-center">
                     <div className="col-auto">
                        <p>Copy rigth 2015</p>
                      </div>
                </div>
           </div>

        </div>
   
    )
}

export default Footer ;