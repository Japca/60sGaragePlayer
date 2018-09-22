import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import { Grid } from '@material-ui/core';

class Layout extends Component {

    render() {
        return (
            <Grid container spacing={10} justify={'center'}>
                <Grid item  xs={12} sm={11} md={9} lg={7} xl={8}>
                    <TrackList/>
                </Grid>
            </Grid>
        );
    }
}

export default Layout;