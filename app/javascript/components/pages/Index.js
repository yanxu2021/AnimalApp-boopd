import React, { Component } from 'react'
import IndexCard from './IndexCard'

class Index extends Component{
  render(){
      return(
      <>
        <div className="index-container">
          <h3>All Listings</h3>
          <IndexCard {...this.props}/>
        </div>
      </>
      )
  }
}

export default Index
