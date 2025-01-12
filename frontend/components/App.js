import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })

    }
    //fetchPhoto()
    setApod({
        "date": "2023-12-10",
        "explanation": "When did you first learn to identify this group of stars? Although they are familiar to many people around the world, different cultures have associated this asterism with different icons and folklore. Known in the USA as the Big Dipper, the stars are part of a constellation designated by the International Astronomical Union in 1922 as the Great Bear (Ursa Major).  The recognized star names of these stars are (left to right) Alkaid, Mizar/Alcor, Alioth, Megrez, Phecda, Merak, and Dubhe.  Of course, stars in any given constellation are unlikely to be physically related. But surprisingly, most of the Big Dipper stars do seem to be headed in the same direction as they plough through space, a property they share with other stars spread out over an even larger area across the sky.  Their measured common motion suggests that they all belong to a loose, nearby star cluster, thought to be on average only about 75 light-years away and up to 30 light-years across. The cluster is more properly known as the Ursa Major Moving Group. The featured image captured the iconic stars recently above Pyramid Mountain in Alberta, Canada.   Night Sky Network webinar: APOD editor to review coolest space images of 2023",
        "hdurl": "https://apod.nasa.gov/apod/image/2312/BigDipperMt2_Cullen_1365.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Big Dipper over Pyramid Mountain",
        "url": "https://apod.nasa.gov/apod/image/2312/BigDipperMt2_Cullen_960.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
   <section>
    <Card 
    title={apod.title}
    text={apod.explanation}
    imageURL={apod.url}
    date={apod.date}
    />
    </section>
  )
}

export default App
