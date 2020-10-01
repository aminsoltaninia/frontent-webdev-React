import React from 'react';
import  Header from '../components/header'
import Menu from './MenueComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import  DishDetail from  './DishDetailComponent';
import AboutUs from '../components/AboutComponent';
import Footer from '../components/footer'
import { Dishes } from '../shared/dishes';
import {Promotions} from '../shared/promotions';
import {Leaders} from '../shared/leaders';
import {Comments} from '../shared/comment'
import {Switch , Route , Redirect } from 'react-router-dom'

class Main extends React.Component {

    constructor(props) {
        console.log("constractor Main")
        super(props);
        this.state = {
            dishes: Dishes,
            comments : Comments ,
            promotions : Promotions ,
            leaders : Leaders ,
        }
    }
    static getDerivedStateFromProps() {
        console.log('get drive Main')
        return null
    }
    
    shouldComponentUpdate(){
        console.log('should update Main')
        return true;
    }
    // onDishSelect(dishId) {
    //     this.setState({
    //         selectDish: dishId
    //     })
    // }
    

   
    render() {
        
        const DishWithID = ({match})=>{
            console.log(match)
            return(
                <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === match.params.amin)[0]} 
                            comments = { this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.amin , 10))}
                />
            )
        }
        console.log("render Main")
        const HomePage = ()=>{
             return(
                 <Home dish={this.state.dishes.filter((dish)=> dish.featured )[0]}
                       promotion={this.state.promotions.filter((pro)=> pro.featured )[0]}
                       leader={this.state.leaders.filter((leder)=> leder.featured )[0]}
                />
             )
        }
        return (
            <div >
                <Header/>
                  <Switch>
                      <Route path="/home"  component={HomePage}/>
                      <Route exact path="/menu" exact component={()=> <Menu dishes={this.state.dishes}/>} />
                      <Route path="/menu/:amin" component={DishWithID}/>
                      <Route exact path="/ContactUS" component={Contact} />
                      <Route path="/AboutUS" component={()=> <AboutUs leaders = {this.state.leaders} />} />
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
    componentDidMount() {
        console.log("did mount Main")
    }
}

export default Main;
