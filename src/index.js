/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

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