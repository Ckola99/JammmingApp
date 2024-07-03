import React from 'react'

function Welcome({ onLogin }) {
  return (
    <div>
      <h1>Welcome To JAMMMIN</h1>
      <p>One stop music playlist maker powered by Spotify</p>
      <button onClick={onLogin}>Start</button>
    </div>
  )
}

export default Welcome
