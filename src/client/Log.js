import React, { Component } from 'react'
import axios from 'axios';


export default class ItemsList extends Component {

    // constructor(props) {
    //     this.state = []
    // }

    componentDidMount() {
        debugger
        axios.get('http://localhost:3000/metaData').then(response => {
            debugger
            let data = response.data
            this.setState(data)
        }) 
    }

    render() {
        console.info('Log component')
        return (
            <div>
             
              <h1>Log compnentaaa</h1>
            </div>
        )
    }
}