import React from 'react';
import { Navbar, NavbarBrand ,Nav , NavbarToggler ,
        Collapse , NavItem , FormGroup , Input, Button , Label ,
        Jumbotron , Modal , ModalBody , ModalHeader , Form
        } from 'reactstrap';
import { NavLink} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false ,
            isModalOpen : false
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    toggleModal(){
        this.setState ({
            isModalOpen : !this.state.isModalOpen ,
           
        })
    }

    toggleNav(){
        this.setState ({
            isNavOpen : !this.state.isNavOpen ,
           
        })
    }

    handleLogin(event){
         this.toggleModal(); 
         console.log(this.username.value , this.password.value,this.remember.value)
         event.preventDefault();
    }

    render(){


        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav.bind(this)}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href="/">
                            <img height="30" width="41" src="https://fantoni.sadernama.com/wp-content/uploads/2019/02/logo-fantoni.png"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                    <NavItem>
                                        <NavLink  className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="nav-link" to="/Menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="nav-link" to="/AboutUS"><span className="fa fa-info fa-lg"></span> About us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="nav-link" to="/ContactUS"><span className="fa fa-address-card fa-lg"></span> Contact us</NavLink>
                                    </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                 <NavItem>
                                     <Button outline onClick={this.toggleModal.bind(this)}>
                                          <span className="fa fa-sign-in"></span> Sign in
                                     </Button>
                                 </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                              <div className="col-12 col-sm-6">
                                   <h1>Fantoni store</h1>
                                   <p>accessories and appliancess kitchen</p>
                              </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal.bind(this)}>
                     <ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>
                     <ModalBody>
                         <Form onSubmit={this.handleLogin}> 
                              <FormGroup>
                                  <Label htmlFor="username">
                                       Username 
                                  </Label>
                                  <Input type="text" id="username" 
                                         name="username"
                                         innerRef={(input)=> this.username = input}
                                         />
                              </FormGroup>
                              <FormGroup>
                                  <Label htmlFor="password">
                                       Password 
                                  </Label>
                                  <Input type="password" id="password"
                                         name="password" 
                                         innerRef={(input)=> this.password = input}
                                         />
                              </FormGroup>
                              <FormGroup check>
                                  <Label check>
                                       <Input type="checkbox" name="remember"
                                              innerRef={(input)=> this.remember = input}
                                              />
                                       Remember me 
                                  </Label>
                                  
                              </FormGroup>
                              <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                         </Form>
                     </ModalBody>
                </Modal>
            </>
            
            
        )
    }



}


export default  Header ;