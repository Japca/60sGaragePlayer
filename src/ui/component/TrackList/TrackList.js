import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Track from '../Track/Track';


class TrackList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('/tags')
            .then(response => this.setState({data: response.data}))
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let data = this.state.data;
        return (
            <Fragment>
                {data.map(track => {
                    return <Track key = {track.id}  track = {track}/>;
                })}
            </Fragment>
        );
    }


}


export default TrackList;

