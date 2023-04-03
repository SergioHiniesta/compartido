import './Avatar.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ id, name = '👷‍♀️', size }) => {
  // Si se quiere ver que props recibe
  // console.log({props});

  const [enabled, setEnabled] = useState(true)
  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`

  let pictureClassName = ''
  if (size === 'small') {
    pictureClassName = 'is-small'
  } else if (size === 'large') {
    pictureClassName = 'is-large'
  }

  const imgClassName = enabled ? '' : 'disabled'

  return (
    <>

    <picture className={pictureClassName}>
      {id
        ? (
        <img
          alt=""
          onClick={() => {
            setEnabled(!enabled)
          }}
          className={imgClassName}
          src={src}
        />
          )
        : (
        <i>Sin imagen</i>
          )}
      <strong>{enabled ? name : 'Desactivada'}</strong>
    </picture>
  </>
  )
}
Avatar.propTypes = {
  size: PropTypes.string
}

export default Avatar
