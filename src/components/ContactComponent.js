import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control , Form , Errors  } from 'react-redux-form'



const required = (val)=> val && val.length;
const maxLength = (len)=> (val)=> !(val) || (val.length<=len)
const minLength = (len)=> (val)=> (val) && (val.length >= len)
const isNumber = (val)=> !isNaN(Number(val));
const validEmail = (val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handdleSubmit = this.handdleSubmit.bind(this);
    }

    handdleSubmit(values) {
        console.log("current state : " + JSON.stringify(values))
        alert("curent state : " + JSON.stringify(values))
        this.props.resetFeedbackForm()
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                   </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>Contact us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row row-content align-items-center">



                    <div className="col-12 col-sm-6 col-md-5 offset-1">
                        <h5>address</h5>
                        <address>
                            Here's the example 2 footer material <br />
                            <i className="fa fa-phone"></i> 5665566565 <br />
                            <i className="fa fa-fax"></i> 5665566565 <br />
                            <i className="fa fa-envelope"></i>
                        </address>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-success" href="www.fantonistore.com"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="www.fantonistore.com"><i className="fa fa-skype"></i>Skype</a>
                            <a role="button" className="btn btn-primary" href="www.fantonistore.com"><i className="fa fa-envelope"></i>Email</a>
                        </div>
                    </div>
                    <div className="col col-sm col-md align-items-center">
                        <h4>map of your location</h4>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>feedback</h3>
                    </div>
                    <div className="col-12 col-sm-9">
                        <Form model="feedback" onSubmit={(values)=> this.handdleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>
                                    Firs name :
                                </Label>
                                <Col md={10}>

                                    <Control.text model=".firstname" id="firstname"
                                        name="firstname"  placeholder="first name"
                                        className="form-control"
                                        validators={{
                                            required ,
                                            minLength : minLength(3) , 
                                            maxLength : maxLength(15)
                                        }}
                                    />
                                    <Errors
                                       className="text-danger"
                                       model=".firstname"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           minLength : 'first name musb be grater than 3 caracters',
                                           maxLength : 'first name must be less than 15 caracters'
                                       }}
                                    />
                                </Col>

                            </Row>

                            <Row className="form-group">
                                <Label htmlFor=".lastname" md={2} >
                                    last name :
                                </Label>
                                <Col md={10} >
                                    <Control.text id="lastname"
                                        name="lastname" model=".lastname" placeholder="last name "
                                        className="form-control"
                                        validators={{
                                            required ,
                                            minLength : minLength(3) , 
                                            maxLength : maxLength(15)
                                        }}
                                    />
                                    <Errors
                                       className="text-danger"
                                       model=".lastname"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           minLength : 'last name musb be grater than 3 caracters',
                                           maxLength : 'last name must be less than 15 caracters'
                                       }}
                                    />
                            
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="tellnum" md={2} >
                                    tell number :
                                </Label>
                                <Col md={10} className="col-7 col-md-7">

                                    <Control.text model=".tellnum" id="tellnum" name="tellnum"
                                        placeholder="tell number"
                                        className="form-control"
                                        validators={{
                                            required ,
                                            minLength : minLength(3) , 
                                            maxLength : maxLength(15) ,
                                            isNumber
                                        }}
                                    />
                                     <Errors
                                       className="text-danger"
                                       model=".tellnum"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           minLength : ' musb be grater than 3 caracters',
                                           maxLength : ' must be less than 15 caracters',
                                           isNumber : 'please enter just number '
                                       }}
                                    />
                                     
                                </Col>

                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    email :
                                </Label>
                                <Col md={10} >

                                    <Control.text id="email" name="email" model=".email"
                                        placeholder="email"
                                        className="form-control"
                                        validators={{
                                            required ,
                                            validEmail 
                                        }} 
                                    />
                                    <Errors
                                       className="text-danger"
                                       model=".email"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           validEmail: ' please enter valid email ( myemail@host.com ) '
                                       }}
                                    />
                                   
                                </Col>
                            </Row>

                            <Row className="form-group">

                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check" >
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>

                                    <Control.select model=".contactType" name="contactType"
                                                    className="form-control"
                                    >
                                        <option >
                                            tel.
                                               </option>
                                        <option >
                                            email.
                                               </option>

                                    </Control.select>


                                </Col>


                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>
                                    feedback :
                                </Label>
                                <Col >

                                    <Control.textarea id="feedback" name="feedback" placeholder="feedback"
                                        rows="7" model=".feedback"
                                        className="form-control"
                                    >

                                    </Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
            </div>



        )
    }

}



export default Contact;