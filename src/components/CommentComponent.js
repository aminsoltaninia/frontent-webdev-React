import React from 'react';

class Comment extends React.Component{

    

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
          
            <div className="col-12 col-md-5 ml-5">
                     <h1>Comments</h1>
                    {comments}
            </div>
             
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