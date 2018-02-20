import React, { Component } from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules'
import styles from './trackList.css'

class TrackList extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('/metaData').then(response => {
            this.setState({ data: response.data })
        })
    }

    render() {
        let data = this.state.data
        let id= 0;
        return (
            <div styleName="container">
                   <i className="fa fa-spinner"></i>
                {data.map(track => {
                    return <div styleName="track" key={++id}>
                        <i className="fa fa-spinner fa-spin"></i>
                        <p>{track.title} ({track.year})</p>
                        <p>{track.artist}</p>
                    </div>
                })}
            </div>
        )
    }
}
 

export default CSSModules(TrackList, styles)

