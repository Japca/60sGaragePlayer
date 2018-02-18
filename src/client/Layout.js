import React, { Component } from 'react'
import axios from 'axios'


export default class Layout extends Component {

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
              <h1>Log compnentaaa</h1>
            </div>
        )
    }
}