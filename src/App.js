import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom'


class App extends React.Component {

    static getDerivedStateFromProps() {
        console.log('get drive App')
        return null
    }
    
    shouldComponentUpdate(){
        console.log('should update App')
        return true
    }
      
   

    render() {
        console.log("render App")
        return (
           <BrowserRouter>
             <div >
                <Main />
             </div>
           </BrowserRouter> 
          
        )
    }
     
    getSnapshotBeforeUpdate(){
        console.log('get snapshot APP')
        return null
    }

    componentDidMount() {
        console.log("did mount App")
    }
}

export default App;
