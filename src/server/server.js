const express = require('express')
const tracks = require('./tracks.js')

const server = express()

const port = process.env.PORT || 3000

let trackMetaData
server.get('/metaData', function (req, res) {
  if(trackMetaData) {
    res.send(trackMetaData)
    return
  } 

  tracks.load('tracks').then(data => {
    trackMetaData = data
    res.send(trackMetaData)
  })
})

if(process.env.NODE_ENV === 'procuction') {
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.dev')
  server.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  server.use(express.static('public'))
  server.use(express.static('public/fonts'))
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
 }

 
server.listen(port, () => console.log(`Garage player server stared on port: ${port}`))

