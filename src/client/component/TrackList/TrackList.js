import React, { Component } from 'react';
import axios from 'axios';


class TrackList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:  []
        };
    }

    componentDidMount() {
        debugger;
        axios.get('/metaData').then(response => {
            this.setState({ data: response.data });
        });
    }

    render() {
        let data = this.state.data;
        let id = 0;
        return (
            <div>
                {data.map(track => {
                    return <div key={++id}>
                        <div className="text">
                            <p>{track.title} ({track.year})</p>
                            <p>{track.artist}</p>
                        </div>
                    </div>;
                })}
            </div>
        );
    }


}


export default TrackList;

