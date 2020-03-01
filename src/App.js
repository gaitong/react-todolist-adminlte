import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Application from './Application'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Application/>
        <Footer/>
      </div>
    )
  }
}
