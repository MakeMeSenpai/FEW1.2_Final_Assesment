import React from 'react'

function Fix(props) {
    // this is the equivalent of defining props.name etc.
    const { band_name, fans, formed, origin, split, style } = props
    return (
      <div>
          <h2>{band_name}</h2>
          <h3>Formed: {formed}</h3>
          <h3>{origin}</h3>
          <h3>Fans: {fans}</h3>
          <h3>split: {split}</h3>
          <h3>style: {style}</h3>
      </div>
    )
  }

export default Fix;