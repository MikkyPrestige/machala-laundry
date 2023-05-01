// AVATAR COMPONENT

import React from 'react';

const Avatar = ({image="", alt="", style={}}) => {
  return (
    // <div className="avatar">
      <img src={image} alt={alt} style={style} />
    // </div>
  )
}

export default Avatar
