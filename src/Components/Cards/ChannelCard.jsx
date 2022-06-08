import React from 'react'
import './ChannelCard.css'


const ChannelCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="channel_pfp" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ChannelCard