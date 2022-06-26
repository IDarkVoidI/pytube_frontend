import React from 'react'

const InputComponent = ({ className, name, id, type, onChange, placeholder }) => {
    return (
        <input className={className} name={name} id={id} type={type} onChange={onChange} placeholder={placeholder} />
    )
}

export default InputComponent


