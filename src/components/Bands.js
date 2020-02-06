import React, { Component } from 'react'

const Bands = props => {
  let bands = props.bands.map(band => {
    return <li>{band.name}</li>
  })

  return (
    <div>
      {bands}
    </div>
  )
}

export default Bands