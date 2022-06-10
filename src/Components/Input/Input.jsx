import React from 'react'

const InputComponent = (props) => {
    return (
        <input name={props.name} id={props.id} type={props.type} onChange={props.onchange} />
    )
}

export default InputComponent


