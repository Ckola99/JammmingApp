import React from 'react'
import Tracklist from './Tracklist'

function SearchResults({ tracks, addToPlaylist, clear }) {
  return (
    <div>
	<Tracklist tracks={tracks} addToPlaylist={addToPlaylist} clear={clear}/>
    </div>
  )
}

export default SearchResults
