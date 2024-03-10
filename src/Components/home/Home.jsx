import React from 'react'
import Hero from '../hero/Hero'
import Header from '../header/Header'

function Home({movies}) {
  return (
    <><Header></Header><Hero movies={movies}></Hero></>
  )
}

export default Home