import React from 'react'
import Tracklist from './Tracklist'

function SearchResults({ tracks, addToPlaylist, clear, play }) {
  return (
    <div>
	<Tracklist tracks={tracks} addToPlaylist={addToPlaylist} clear={clear} play={play}/>
    </div>
  )
}

export default SearchResults
