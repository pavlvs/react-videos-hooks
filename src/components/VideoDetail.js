import React from 'react'
import PropTypes from 'prop-types'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

VideoDetail.propTypes = {}

export default VideoDetail
