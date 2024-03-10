import React from 'react'
import { useParams } from 'react-router-dom'
import './Trailer.css'

function Trailer() {
    let params = useParams()
    let key = params.ytTrailerId;
  return (
    <div className='react-player-container'>
        ici
    </div>
  )
}

export default Trailer
