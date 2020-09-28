import React from 'react';

import  {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenueComponent';
import './App.css';
import {Dishes} from './shared/dishes';


// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <body>
    //     <h1>amin</h1>
    //   </body>
    // </div>
//   );
// }

class App extends React.Component{
    
   constructor(props){
       super(props);
       this.state = {
           dishes : Dishes 
       }
   } 
  
   render(){

     return(
      <div >
          <Navbar dark color="primary">
              <div className="container"> 
                  <NavbarBrand href="/">Fantoni store</NavbarBrand>
              </div>     
          </Navbar>
          <Menu dishes={this.state.dishes}/>
      </div>
     )
   }
}

export default App;
