import React from 'react'

export default function RightArrow(props) {
    return (
        <div className="nextArrow" onClick={props.goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    )
}
