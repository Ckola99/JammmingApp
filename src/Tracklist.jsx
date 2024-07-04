import React from 'react';
import Track from './Track';
import './Tracklist.css';

function Tracklist({ tracks, addToPlaylist, play }) {
  return (
    <div className="tracklist-container">
      {tracks.map(track => (
        <div key={track.id} className="tracklist-item">
          <Track track={track} addToPlaylist={addToPlaylist} play={ play }/>
        </div>
      ))}
    </div>
  );
}

export default Tracklist;
