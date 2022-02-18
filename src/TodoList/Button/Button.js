import React from 'react'

function Button(props) {
  if (props.hideBtn) {
    return null;
  }
  return (
      <div className='button-center'>
        <button className='button' onClick={() => props.toggleHideBtn()}>+</button>
      </div>
  )
}

export default Button