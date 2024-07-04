import React from 'react'
import Tracklist from './Tracklist'

function SearchResults({ tracks, addToPlaylist, clear, playPreview }) {
  return (
    <div>
	<Tracklist tracks={tracks} addToPlaylist={addToPlaylist} clear={clear} playPreview={playPreview}/>
    </div>
  )
}

export default SearchResults
