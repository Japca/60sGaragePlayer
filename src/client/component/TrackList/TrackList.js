// @flow
import React, { Component } from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules';
import styles from './trackList.css';
import classnames from 'classnames';
import type { Track } from '../../../types/Track';

class TrackList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:  []
        }
    }

    componentDidMount() {
        axios.get('/metaData').then(response => {
            this.setState({ data: response.data });
        });
    }

    render() {
        let data: Array<Track>  = this.state.data;
        let id = 0;
        return (
            <div styleName="container">
                {data.map(track => {
                    return <div styleName="track" key={++id}>
                        <span className="play">
                            <i className="fa fa-caret-square-o-right fa-3x" aria-hidden="true"></i>
                        </span>
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


export default CSSModules(TrackList, styles);

