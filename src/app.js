const tracks = require('./tracks.js')
debugger;

let trackMetaData = tracks.load('tracks')
trackMetaData.then(data => {
    console.log(data)
})
