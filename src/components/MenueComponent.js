
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle , Breadcrumb , BreadcrumbItem } from 'reactstrap'
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent'

// class Menu extends React.Component {


//     constructor(props) {
//         console.log("constractor MEnu")
//         super(props)
       
//     }

//     static getDerivedStateFromProps() {
//         console.log('get drive Menu')
//         return null;
//     }

//     shouldComponentUpdate(){
//         console.log('should update Menu')
//         return true;
//     }
    
  
//     render() {
//         console.log("render menu")
        
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick={() => this.props.onClick(dish.id)}>

//                         <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />


//                         <CardImgOverlay className="ml-5">
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>

//             )
//         });

//         return (

//             <div className="container">
//                 <div className="row">

//                     {menu}

//                 </div>
//             </div>
//         )

//     }

//     getSnapshotBeforeUpdate(){
//         console.log('get snapshot Menu')
//         return null
//     }

//     componentDidMount() {
//         console.log("did mount Menu")
//     }


// }

function RenderMenuComponent({dish}){
    return(
        <Card>
              
              
              <CardImg width="100%" height="100%" src={dish.image} alt={dish.name} />


              <CardImgOverlay >
                        <CardTitle>{dish.name}</CardTitle>
                        <Link to={`/Menu/${dish.id}`}>
                             <button className="btn btn-danger">more detail...</button>
                        </Link> 
                        
               </CardImgOverlay>

               
         </Card>
    )
}


function Menu(props){
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuComponent dish={dish}/>
            </div>

        )
    });
    if(props.dishes.isLoading){
        return (
             <div className="container">
                 <div className="row">
                    <Loading/>
                 </div>
                 
             </div>
        )
    }
    else if(props.dishes.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
                
            </div>
       )
    }
    else {
       
      return(
        <div className="container">
           <div>
               <Breadcrumb>
                  <BreadcrumbItem>
                       <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                      Menu
                  </BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                    <h3>Menu</h3>  
                    <hr/>
               </div>
           </div> 
           <div className="row">

              {menu}

            </div>
        </div>
      )
    }
}


export default Menu;