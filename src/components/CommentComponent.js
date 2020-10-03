import React from 'react';
import { Button , Label , Modal , ModalBody , ModalHeader , Col, Row } from 'reactstrap';
import {Control , LocalForm , Errors } from 'react-redux-form';



const required = (val)=> val && val.length;
const maxLength = (len)=> (val)=> !(val) || (val.length<=len)
const minLength = (len)=> (val)=> (val) && (val.length >= len)
const isNumber = (val)=> !isNaN(Number(val));

class FormComment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handdleSubmit = this.handdleSubmit.bind(this);
    }
    handdleSubmit(values) {
        this.toggleModal(); 
        this.props.addComment(this.props.dishId , values.rate , values.name , values.comment)
   }
   toggleModal(){
      this.setState ({
        isModalOpen : !this.state.isModalOpen ,
       
      })
    }
    render(){
        return(
            <>
             <Button outline onClick={this.toggleModal}>
                           submit comment
                    </Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Comment </ModalHeader>
                 <ModalBody>
                  <LocalForm onSubmit={(values)=> this.handdleSubmit(values)}>   
                       <Row className="form-group">
                                <Col >
                                   <Control.select  model=".rate" name="rate"
                                                
                                                className="form-control"
                                                validators={{
                                                    isNumber
                                                }}
                                    >
                                    <option defaultValue>
                                       select rate     
                                    </option>    
                                    <option >
                                        1
                                    </option>
                                    <option >
                                        2
                                    </option>
                                    <option >
                                        3
                                    </option>
                                    <option >
                                        4
                                    </option>
                                    <option >
                                        5
                                    </option>

                                  </Control.select>
                                  <Errors
                                       className="text-danger"
                                       model=".rate"
                                       show="touched"
                                       messages={{
                                           isNumber : 'please select rating '
                                       }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="name" md={2}>
                                     name :
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name"
                                        name="name"  placeholder="name"
                                        className="form-control"
                                        validators={{
                                            required ,
                                            minLength : minLength(3) , 
                                            maxLength : maxLength(15)
                                        }}
                                    />
                                    <Errors
                                       className="text-danger"
                                       model=".name"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           minLength : 'name musb be grater than 3 caracters',
                                           maxLength : 'name must be less than 15 caracters'
                                       }}
                                    />
                                </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="comment" md={2}>
                                    comment:
                                </Label>
                                <Col >

                                    <Control.textarea id="comment" name="comment" placeholder="comment"
                                       
                                        rows="7" model=".comment"
                                        className="form-control"
                                        validators={{
                                            required ,
                                            minLength : minLength(3) , 
                                            maxLength : maxLength(15)
                                        }}
                                    >
                                    </Control.textarea>
                                    <Errors
                                       className="text-danger"
                                       model=".comment"
                                       show="touched"
                                       messages={{
                                           required : 'required',
                                           minLength : 'comment musb be grater than 3 caracters',
                                           maxLength : 'comment must be less than 15 caracters'
                                       }}
                                    />
                                </Col>
                            </Row>
                        <Row className="form-group">
                                <Col md={{ size: 6, offset: 0}}>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Col>
                            </Row>
                    </LocalForm>
              </ModalBody>
           </Modal>
            </>
        )
    }
}


class Comment extends React.Component{
     
    constructor(props){
        super(props);
        
    }
    
 

     static getDerivedStateFromProps() {
        console.log('get drive Comment')
        return null;
    }

    shouldComponentUpdate(){
        console.log('should update Comment')
        return true
    }
    
    
     render(){
         console.log('render Comment')
        const comments = this.props.selectedCom.map((comment)=>{
              return(
                  <div className="container">
                      <div className="row">
                        <p> -- {comment.author}</p>
                        <p> rating : {comment.rating}</p>
                      </div>
                      
                  </div>
              )
        })
        return(
          <>
            <div className="col-12 col-md-5 ml-5">
                     <h1>Comments</h1>
                    {comments}
                    <FormComment dishId={this.props.dishId} addComment={this.props.addComment}/>
                    
            </div>
           
          </>
             
        )
     }


     getSnapshotBeforeUpdate(){
        console.log('get snapshot Comment')
        return null
    }

    componentDidUpdate(){
        console.log('component did update DishDetail')
    }

    componentDidMount() {
        console.log("did mount Comment")
    }


}



export default Comment;