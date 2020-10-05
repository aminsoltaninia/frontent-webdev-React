
import React from 'react';
import { Media , Breadcrumb , BreadcrumbItem  } from 'reactstrap';
import {Link} from 'react-router-dom';

class AboutUs extends React.Component {

    render() {
        console.log(this.props)
        const leaders = this.props.leaders.map((leader) => {
            return(
                <div className="row col-12">
                <Media >
                <Media left >
                    <Media
                        object
                        data-src='{leader.image}'
                        alt='image'
                    />
                </Media>
                  <Media body>
                      <Media heading>{leader.name}</Media>
                       {leader.description} 
                   </Media>
               </Media>
                </div>
              
            )
           
        });
        return (
           
             <div className="container">
             <div>
                 <Breadcrumb>
                    <BreadcrumbItem>
                         <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        About Us
                    </BreadcrumbItem>
                 </Breadcrumb>
                 <div className="col-12">
                    <h2>about us</h2>
                    <hr />
                 </div>
             </div> 
             <div className="row">
  
             {leaders}
  
              </div>
          </div>
        )
    }
}


export default AboutUs;