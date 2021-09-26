import React from 'react'
import PropTypes from 'prop-types'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    return <div>{video.snippet.title}</div>
}

VideoDetail.propTypes = {}

export default VideoDetail
