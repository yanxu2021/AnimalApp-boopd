import React, { Component } from 'react'
import IndexCard from './IndexCard'

class Index extends Component{
  render(){
      return(
      <>
        <div className="index-container">
          <IndexCard {...this.props}/>
        </div>
      </>
      )
  }
}

export default Index