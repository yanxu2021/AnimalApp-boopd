import React, { Component } from 'react'
import IndexCard from './IndexCard'

class Index extends Component{
  render(){
      return(
      <>
          <IndexCard {...this.props}/>
      </>
      )
  }
}

export default Index