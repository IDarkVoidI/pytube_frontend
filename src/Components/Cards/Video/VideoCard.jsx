// video, title, channel, views, created_date, link
import React from 'react'

const VideoCard = (props) => {
    return (
        <div>
            <iframe mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                allow='fullscreen'
                src={props.link}
                width='350px'
                height='200px'
            />
            <h2>{props.title}</h2>
            <h3>{props.channel.title}</h3>
        </div>
    )
}

export default VideoCard