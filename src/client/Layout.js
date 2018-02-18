import React, { Component } from 'react'
import axios from 'axios'
import { debug } from 'util';

import CSSModules from 'react-css-modules'
import styles from './layout.css'


class Layout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('/metaData').then(response => {
            debugger
            this.setState({ data: response.data })
        })
    }

    render() {
        debugger
        let data = this.state.data
        return (
            <div>
                <h1 styleName="coll">Log compnent</h1>
                {data.map(track => {
                    return <div styleName="track">
                        <p>{track.title}</p>
                        <p>{track.artist}</p>
                        <p>{track.year}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default CSSModules(Layout, styles)