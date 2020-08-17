import React, { Component } from "react";
import Nav from './Week3/Nav'
import Content from './Week3/Content'
import Wallpaper from './Week3/Wallpaper'


function App(){
  return(
    <div className='column' style= {{gap:'2em'}}>
      <div style={{paddingBottom:'80px'}}>
      <Nav/>
      </div>
      <div>
      <Content/>
      <Wallpaper/>
      </div>
    </div>

  )
}
export default App