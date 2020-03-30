import React from 'react'

export default function LeftArrow(props) {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}
