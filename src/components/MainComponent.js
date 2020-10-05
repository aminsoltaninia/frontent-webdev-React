import React from 'react';
import  Header from '../components/header'
import Menu from './MenueComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import  DishDetail from  './DishDetailComponent';
import AboutUs from '../components/AboutComponent';
import Footer from '../components/footer'
import {Switch , Route , Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment ,fetchDishes,fetchComments ,fetchPromos} from '../redux/Actioncreater';
import {actions} from 'react-redux-form';

const mapStateToProps = (state)=>{
      return { 
          dishes : state.dishes,
          comments : state.comments ,
          promotions : state.promotions ,
          leaders : state.leaders ,
      
      }  
}

const mapDispatchToProps = (dispatch)=>({
      postComment : (dishId , rating , author , comment )=> dispatch(postComment(dishId , rating , author , comment )),
      fetchDishes : ()=> { dispatch(fetchDishes())},
      resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))},
      fetchComments : ()=> { dispatch(fetchComments())},
      fetchPromos : ()=> { dispatch(fetchPromos())}
})

class Main extends React.Component {

    constructor(props) {
        console.log("constractor Main : " , props)
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    static getDerivedStateFromProps() {
        console.log('get drive Main')
        return null
    }
    
    shouldComponentUpdate(){
        console.log('should update Main')
        return true;
    }

    render() {
        console.log("render Main")
        const DishWithID = ({match})=>{
            console.log( "i lnk match",this.props)
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === match.params.amin)[0]} 
                            dishesLoading={this.props.dishes.isLoading} 
                            dishesErrMess = {this.props.dishes.errMess}
                            comments = { this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.amin , 10))}
                            commentsErrMess = {this.props.comments.errMess}
                            postComment = {this.props.postComment}
                />
            )
        }
        
        const HomePage = ()=>{
             return(
                 <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured )[0]}
                       dishesLoading={this.props.dishes.isLoading} 
                       dishesErrMess = {this.props.dishes.errMess}
                       promotion={this.props.promotions.promotions.filter((pro)=> pro.featured )[0]}
                       promosLoading={this.props.promotions.isLoading} 
                       promosErrMess = {this.props.promotions.errMess}
                       leader={this.props.leaders.filter((leder)=> leder.featured )[0]}
                />
             )
        }
        return (
            <div >
                <Header/>
                  <Switch>
                      <Route path="/home"  component={HomePage}/>
                      <Route exact path="/menu"  component={()=> <Menu dishes={this.props.dishes}/>} />
                      <Route path="/menu/:amin" component={DishWithID}/>
                      <Route exact path="/ContactUS" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                      <Route path="/AboutUS" component={()=> <AboutUs leaders = {this.props.leaders} />} />
                      <Redirect  to="/home"/>
                  </Switch>
                
                <Footer/>
            </div>
        )
    }
      
    getSnapshotBeforeUpdate(){
        console.log('get snapshot Main')
        return null
    }
    componentDidUpdate(){
        console.log('component did update Main')
    }
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
