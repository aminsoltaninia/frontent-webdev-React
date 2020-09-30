import React from 'react';
import { Collapse } from 'reactstrap';

function Contact(props){

    return(
         <div className="container">
            <div className="row row-content align-items-center">

                <div className="col-12 col-sm-8 col-md-9">
                    <h2>Contact us</h2>
                </div> 

                <div className="col-12 col-sm-6 col-md-5 offset-1">
                    <h5>address</h5>
                    <address>
                        Here's the example 2 footer material <br/>
                        <i className="fa fa-phone"></i> 5665566565 <br/>
                        <i className="fa fa-fax"></i> 5665566565 <br/>
                        <i className="fa fa-envelope"></i> 
                    </address>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-success" href=""><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href=""><i className="fa fa-skype"></i>Skype</a>
                        <a role="button" className="btn btn-primary" href=""><i className="fa fa-envelope"></i>Email</a>
                    </div>
                </div>
                <div className="col col-sm col-md align-items-center">
                    <h4>map of your location</h4>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>jshdhsj</h3>
                </div>
                <div className="col-12 col-sm-9">
                    <form action="">
                        <div className="form-group row">
                            <label for="firstname" className="col-12 col-md-2 col-form-lable">
                                Firs name :
                            </label>
                            <div className="col-md-10">

                                <input className="form-control" id="firstname" name="firstname" type="text"/>
                            </div>

                        </div>

                        <div className="form-group row">
                            <label for="lastname" className="col-12 col-md-2 col-form-lable">
                                last name :
                            </label>
                            <div className="col-md-10">

                                <input className="form-control" id="lastname" name="lastname" type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="areacode" className="col-12 col-md-2 col-form-lable">
                                tell number :
                            </label>
                            <div className="col-5 col-md-3">

                                <input type="tel" className="form-control" id="areacode" name="areacode"
                                    placeholder="area code"/>
                            </div>
                            <div className="col-7 col-md-7">

                                <input type="tel" className="form-control" id="tellnumber" name="tellnumber"
                                    placeholder="tell number"/>
                            </div>

                        </div>

                        <div className="form-group row">
                            <label for="email" className="col-md-2 col-form-lable">
                                email :
                            </label>
                            <div className="col-md-10">

                                <input className="form-control" id="email" name="email" type="email" placeholder="email"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-6 offset-md-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="approve" id="approve"
                                        value=""/>
                                    <label for="approve" className="form-check-label">
                                        <strong>may be contact you ?</strong>
                                    </label>
                                </div>

                            </div>
                            <div className="col-md-3 offset-md-1">
                                <select className="form-control" name="" id="">
                                    <option value="">
                                        tel.
                                    </option>
                                    <option value="">
                                        email.
                                    </option>
                                    <option value="">
                                        phone.
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div className="form-group row">
                            <label for="feedback" className="col-md-2 col-form-label">
                                feedback :
                            </label>
                            <div className="col-md-10">

                                <textarea className="form-control" id="feedback" name="feedback" placeholder="feedback"
                                    rows="7">
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                             <div className="offset-md-2 col-md-10">
                                 <button type="submit" className="btn btn-primary">Submit</button>
                             </div>  
                        </div>
                    </form>
                </div>
                <div className="col-12 col-sm">

                </div>
            </div>
        </div>

   

    )
}



export default Contact ;