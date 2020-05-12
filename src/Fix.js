import React from 'react';
import Like from "./Like";

function Fix(props) {
    const { band_name, fans, formed, origin, split, style } = props
    if ({split} !== "-"){
        return (
        <div>
          <h2>{band_name}</h2>
          <h3>Formed: {formed}</h3>
          <h3>{origin}</h3>
          <h3>Fans: {fans}</h3>
          <h3>style: {style}</h3>
          <h3>split: {split}</h3>
          <Like />
        </div>
        )}

    return (
      <div>
          <h2>{band_name}</h2>
          <h3>Formed: {formed}</h3>
          <h3>{origin}</h3>
          <h3>Fans: {fans}</h3>
          <h3>style: {style}</h3>
      </div>
    )
  }

export default Fix;