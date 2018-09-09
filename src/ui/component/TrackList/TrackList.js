import React, {Component} from 'react';
import axios from 'axios';


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
                    return <div key={track.id}>
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

