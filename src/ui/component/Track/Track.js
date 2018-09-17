/* eslint-disable */
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';


class Track extends Component {

    handleOnClick = (id) => {
        axios.get(`/play/${id}`);
    };

    render() {
        let track = this.props.track;
        return (
            <div>
                <Card onClick = {this.handleOnClick(track.id)}>
                    <CardContent>
                        <Typography component="h2">
                            {`${track.title} (${track.year})`}
                        </Typography>
                        <Typography >
                            {track.artist}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}


export default Track;

