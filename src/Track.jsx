import React from 'react'
import "./Track.css"

function Track({ track, addToPlaylist, playPreview }) {
  return (
		<div className="track">
			<div className="track-details">
				<img
					className="track-image"
					src={track.imageUrl}
					alt=""
				/>
				<div className="details">
					<h3>{track.name}</h3>
					<p>{track.artist}</p>
					<p>{track.album}</p>
				</div>
			</div>
			<button
				className="addButton"
				onClick={() => addToPlaylist(track)}
			>
				Add
			</button>
       <button className="previewButton" onClick={() => playPreview(track.previewUrl)}>
        Preview
      </button>
		</div>
  );
}

export default Track
