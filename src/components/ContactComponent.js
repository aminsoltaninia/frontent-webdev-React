import React from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Form, Button, FormGroup, Label,
    Input, Col, FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            tellnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            feedback: '',
            touched: {
                firstname: false,
                lastname: false,
                tellnum: false,
                email: false
            }
        }
        this.handdleSubmit = this.handdleSubmit.bind(this);
        this.handdleInputChange = this.handdleInputChange.bind(this);
        this.validate = this.validate.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handdleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        console.log(target.type, value)
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleBlur = (field) =>
        (evt) => {
            this.setState({
                touched: {

                    ...this.state.touched,
                    [field]: true

                }
            })
            console.log(this.state.touched , field)
        }

    validate(firstname, lastname, tellnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            tellnum: '',
            email: '',
        }

        const reg = /^\d+$/;

        if (this.state.touched.firstname && firstname.length < 3) {
            console.log('touch')
            errors.firstname = "First Name Should be grater than of 3 cracters"
        } else if (this.state.touched.firstname && firstname.length > 10) {
            errors.firstname = "First Name Should be less than of 10 cracters"
        }

        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = "last name Should be grater than of 3 cracters"
        } else if (this.state.touched.lastname && lastname.length > 10) {
            errors.lastname = "last name Should be less than of 10 cracters"
        }

        if(this.state.touched.tellnum && !reg.test(tellnum)){
            errors.tellnum = "tell number must be only number"      
        }  

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "email field must be an email" 

        return errors;
    }

    handdleSubmit(event) {
        console.log("current state : ", JSON.stringify(this.state))
        event.preventDefault()
    }

    render() {
        const errors = this.validate(this.state.firstname , this.state.lastname ,  this.state.tellnum ,  this.state.email )
        console.log(errors)
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
                        <h3>feedback</h3>
                    </div>
                    <div className="col-12 col-sm-9">
                        <Form onSubmit={this.handdleSubmit.bind(this)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>
                                    Firs name :
                                </Label>
                                <Col md={10}>

                                    <Input id="firstname"
                                        name="firstname" type="text" placeholder="first name"
                                        value={this.state.firstname}
                                        valid={errors.firstname===''}
                                        invalid={errors.firstname!==''}
                                        onChange={this.handdleInputChange}
                                        onBlur={this.handleBlur('firstname')}
                                    />
                                    <FormFeedback>
                                        {errors.firstname}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2} >
                                    last name :
                                </Label>
                                <Col md={10} >
                                    <Input id="lastname"
                                        name="lastname" type="text" placeholder="last name "
                                        value={this.state.lastname}
                                        valid={errors.lastname===''}
                                        invalid={errors.lastname!==''}
                                        onChange={this.handdleInputChange}
                                        onBlur={this.handleBlur('lastname')}
                                    />
                                     <FormFeedback>
                                        {errors.lastname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="tellnum" md={2} >
                                    tell number :
                                </Label>
                                <Col md={10} className="col-7 col-md-7">

                                    <Input type="tel" id="tellnum" name="tellnum"
                                        placeholder="tell number"
                                        value={this.state.tellnum}
                                        valid={errors.tellnum===''}
                                        invalid={errors.tellnum!==''}
                                        onChange={this.handdleInputChange}
                                        onBlur={this.handleBlur('tellnum')}
                                    />
                                     <FormFeedback>
                                        {errors.tellnum}
                                    </FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>
                                    email :
                                </Label>
                                <Col md={10} >

                                    <Input id="email" name="email" type="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        valid={errors.email===''}
                                        invalid={errors.email!==''}
                                        onChange={this.handdleInputChange}
                                        onBlur={this.handleBlur('email')}
                                    />
                                     <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"

                                                checked={this.state.agree}
                                                onChange={this.handdleInputChange} /> {' '}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>

                                    <Input type="select" name="contactType"

                                        value={this.state.contactType}
                                        onChange={this.handdleInputChange}
                                    >
                                        <option >
                                            tel.
                                               </option>
                                        <option >
                                            email.
                                               </option>

                                    </Input>


                                </Col>


                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>
                                    feedback :
                                </Label>
                                <Col >

                                    <Input id="feedback" name="feedback" placeholder="feedback"
                                        rows="7" type="textarea"
                                        value={this.state.feedback}
                                        onChange={this.handdleInputChange}
                                    >

                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>



        )
    }

}



export default Contact;