const tracks = require('./tracks.js')

let trackMetaData = tracks.load('../tracks')
console.log(trackMetaData.then(data => {
    console.log(data)
}))
