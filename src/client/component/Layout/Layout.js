// @flow
import React, { Component } from 'react'
import axios from 'axios'
import moduleName from '../TrackList/TrackList'

import CSSModules from 'react-css-modules'
import styles from './layout.css'
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


export default CSSModules(Layout, styles)