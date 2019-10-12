import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {

    const videoList = videos.map((video, id) =>
        <VideoItem
            onVideoSelect={onVideoSelect}
            key={id}
            video={video} />)

    return (
        <Grid container spacing={4}>
            {/* <h1>Video list component</h1> */}
            {videoList}
        </Grid>
    )

}

export default VideoList;
