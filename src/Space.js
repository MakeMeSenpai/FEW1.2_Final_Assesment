import React from 'react';
import Fix from './Fix'
import data from './metal.json'

function Space() {

// takes from our JSON database
const item = Object.keys(data).length;
const spaces = data.map(( { band_name, fans, formed, origin, split, style }) => {

  return (
    <Fix
        band_name={band_name}
        fans={fans}
        formed={formed}
        origin={origin}
        split={split}
        style={style}
    />
  )
})

  return (
    <div>
        <h3>Bands: { item }</h3>
        { spaces }
    </div>
  )
}

export default Space;