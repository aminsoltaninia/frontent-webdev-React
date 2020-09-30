import React from 'react';
import Comment from './CommentComponent'
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem  } from 'reactstrap';
import {Link} from 'react-router-dom';

// class DishDetail extends React.Component{

  

//     static getDerivedStateFromProps() {
//         console.log('get drive DishDetail')
//         return null;
//     }

//     shouldComponentUpdate(){
//         console.log('should update DishDetail')
//         return true;
//     }
    
//     renderDish(dish) {
        
//         if (dish != null) {
//             return (
               
//                       <div className="row">
//                         <Card className="col-12 col-md-5 m-1" >

//                             <CardImg width="100%" src={dish.image} alt={dish.name} />
//                             <CardBody>
//                                 <CardTitle>{dish.name}</CardTitle>
//                                 <CardText>{dish.description}</CardText>
//                             </CardBody>
//                         </Card>
                   
//                         <Comment  selectedCom={dish.comment}/>
//                     </div>
                
                

//             )
//         } else {
//             return (
//                 <div></div>
//             )

//         }
//     }


//     render(){
//         console.log('render Dish detail ')
//        return (
            
//            <div className="container">
//                   {this.renderDish(this.props.dish)}
//            </div>
           
//        )
     
//     }

//     getSnapshotBeforeUpdate(){
//         console.log('get snapshot DishDetail')
//         return null
//     }
//     componentDidUpdate(){
//         console.log('component did update DishDetail')
//     }

//     componentDidMount() {
//         console.log("did mount DishDetail")
//     }


// }

function DishDetail(props){

    const renderDish = (dish,comments)=>{
       
        if (dish != null) {
            return (
               
                      <div className="row">
                        <Card className="col-12 col-md-5 m-1" >

                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                   
                        <Comment  selectedCom={comments}/>
                    </div>
                
                

            )
        } else {
            return (
                <div></div>
            )

        }
    }

    return(
        <div className="container">
            <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem>
                       <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active >
                       {props.dish.name}
                  </BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                     <h3>{props.dish.name}</h3>
                     <hr/>
               </div>
            </div>
           
            {renderDish(props.dish , props.comments)}
        </div>
    )
}


export default DishDetail;