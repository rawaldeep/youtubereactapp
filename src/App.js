import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import Youtube from './api/Youtube';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);


    const handleSubmit = async (searchTerm) => {

        const resp = await Youtube.get('search', {
            params: {

                part: 'snippet',
                maxResults: 4,
                key: 'AIzaSyBKEYCG7xGe1xYL2dYZOLozIW1b9SA_0hk',
                q: searchTerm,

            }
        })
        setVideos(resp.data.items);
        setSelectedVideo(resp.data.items[0]);
    }


    return (

        <Grid justify='center' container spacing={10}>
            <Grid item xs={12}>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Youtube React App</h1>
                <Grid container spacing={10}>
                    <Grid item xs={8} style={{ marginLeft: '250px' }}>
                        <SearchBar
                            onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail
                            video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default App;

