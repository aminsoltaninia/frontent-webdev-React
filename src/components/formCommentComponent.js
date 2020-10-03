import React from 'react';
import { FormGroup, Input, Button, Label, Modal, ModalBody, ModalHeader, Form } from 'reactstrap';


class FormComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        console.log(props)
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,

        })
    }
    handleLogin(event) {
        this.toggleModal();
        console.log(this.username.value, this.password.value, this.remember.value)
        event.preventDefault();
    }

    render() {
 
        return (
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">
                                Username
                            </Label>
                            <Input type="text" id="username"
                                name="username"

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input type="password" id="password"
                                name="password"

                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"

                                />
                                 Remember me
                            </Label>

                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>

        )
    }
}

export default FormComment;