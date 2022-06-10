import React from 'react'
import './IconButton.css'

const IconButton = (props) => {
    return (
        <button className='button' onClick={props.event}>{props.icon}</button>
    )
}

export default IconButton