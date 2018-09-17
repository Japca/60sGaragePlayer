import React, { Component } from 'react';
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
        axios.get('/tags').then(response => {
            debugger;
            this.setState({data: response.data});
        })
            .catch(err => {
                debugger;
                console.log(err);
            });
    }

    render() {
        let data = this.state.data;
        return (
            <div>
                {data.map(track => {
                    return <Track key = {track.id}  track = {track}/>;
                })}
            </div>
        );
    }


}


export default TrackList;

