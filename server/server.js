const express = require('express')
const tracks = require('./tracks.js')
const server = express()
const port = 3000


 
let trackMetaData;
server.get('/', function (req, res) {
  if(trackMetaData) {
    res.send(trackMetaData)
    return
  } 

  tracks.load('tracks').then(data => {
    trackMetaData = data
    res.send(trackMetaData)
  })
  
})
 
server.listen(port)

