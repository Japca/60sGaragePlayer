import React, { Component } from 'react'
import axios from 'axios'
import TrackList from '../TrackList/TrackList';

class Layout extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
              <TrackList />
            </div>
        )
    }


}


export default Layout