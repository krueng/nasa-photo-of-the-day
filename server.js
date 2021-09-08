const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  if (!req.query.api_key || req.query.api_key !== 'xyz') {
    res.status(403).json({ message: 'Please supply a valid api_key' })
  } else {
    next()
  }
})


const apod = {
    "date":"2021-09-08",
    "explanation":"What surrounds the Andromeda galaxy?  Out in space, Andromeda (M31) is closely surrounded by several small satellite galaxies, and further out it is part of the Local Group of Galaxies -- of which our Milky Way galaxy is also a member. On the sky, however, gas clouds local to our Milky Way appear to surround M31 -- not unlike how water clouds in Earth's atmosphere may appear to encompass our Moon.  The gas clouds toward Andromeda, however, are usually too faint to see.  Enter the featured 45-degree long image -- one of the deeper images yet taken of the broader Andromeda region. This image, sensitive to light specifically emitted by hydrogen gas, shows these faint and unfamiliar clouds in tremendous detail. But the image captures more.  At the image top is the Triangulum galaxy (M33), the third largest galaxy in the Local Group and the furthest object that can be seen with the unaided eye.  Below M33 is the bright Milky-Way star Mirach. The image is the digital accumulation of several long exposures taken from 2018 to 2021 from Pulsnitz, Germany.",
    "hdurl":"https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_1400.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"The Deep Sky Toward Andromeda",
    "url":"https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_960.jpg"
 };

app.get('/planetary/apod', (req, res) => {
    res.json(apod)
})


const friends = [
  { id: '1', name: 'Christopher', email: 'chris@chris.com', age: 32, hobbies: ['coding', 'science fiction', 'sightseeing'] },
  { id: '2', name: 'Julian', email: 'julian@julian.com', age: 28, hobbies: ['fishing', 'coding', 'death metal'] },
  { id: '3', name: 'Sofia', email: 'sofia@sofia.com', age: 25, hobbies: ['hiking', 'netflix', 'coding'] },
  { id: '4', name: 'Joe', email: 'joe@joe.com', age: 22, hobbies: ['heavy metal', 'coding', 'death metal'] },
  { id: '5', name: 'Hung', email: 'hung@hung.com', age: 35, hobbies: ['reading', 'coding', 'bird watching'] },
  { id: '6', name: 'Trevor', email: 'trevor@trevor.com', age: 24, hobbies: ['hiking', 'heavy metal', 'coding'] },
]

app.get('/friends/:id', (req, res) => {
  const friend = friends.find(fr => fr.id === req.params.id)
  if (!friend) {
    res.status(404).json({ message: 'No such friend!' })
  }
  else {
    res.json(friend)
  }
})

app.get('/friends', (req, res) => {
  res.json(friends.map(fr => ({ id: fr.id, name: fr.name })))
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})