import React, { useState } from 'react'
import { YoutubePlayer } from 'reactjs-media'
import { FaPlay } from 'react-icons/fa'

import './Video.scss'

const Video = () => {
  const [slideUp, setSlideUp] = useState(false)
  return (
    <section className={slideUp ? 'video video__slider' : 'video'}>
      <YoutubePlayer
        className="video__player"
        src="https://www.youtube.com/watch?v=xHU5yPT899s"
        allowFullScreen
      />
      <div className="video__overlay">
        <div className="video__play-container">
          <div
            className="video__play-button"
            onClick={() => setSlideUp(!slideUp)}
          >
            <FaPlay className="video__play-icon" />
          </div>
          <span>Lire la vidéo</span>
        </div>
      </div>
    </section>
  )
}

export default Video
