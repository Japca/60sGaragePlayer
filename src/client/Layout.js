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
        
            this.setState( { data: response.data} )
        }) 
    }

    render() {
        debugger;
        console.info('Log component')
        let data = this.state.data
        return (
            <div>
              <h1 styleName="coll">Log compnentaaa</h1>
            </div>
        )
    }
}

export default CSSModules(Layout, styles)