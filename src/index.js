import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './component/home'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>          
      </BrowserRouter>        
    )
  }
  
}
ReactDOM.render(<App/>, document.querySelector("#root"))