import React, { useState } from "react";
import "./Playlist.css";

function Playlist({
	title,
	playlistTracks,
	removeSong,
	onTitleChange,
	onSave,
	clearPlaylist,
}) {
	const [isEditing, setIsEditing] = useState(false);

	const handleTitleClick = () => {
		setIsEditing(true);
	};

	const handleBlur = () => {
		setIsEditing(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleBlur();
		}
	};

	return (
		<div className="playlist-container">
			{isEditing ? (
				<input
					type="text"
					value={title}
					onChange={onTitleChange}
					onBlur={handleBlur}
					autoFocus
					onKeyDown={handleKeyDown}
					className="playlist-title-input"
				/>
			) : (
				<h3
					onClick={handleTitleClick}
					className="playlist-title"
				>
					{title || "Click to name your playlist"}
				</h3>
			)}
			<ul className="playlist-tracks">
				{playlistTracks.map((track, index) => (
					<li key={index}>
						<img
							src={track.imageUrl}
							alt=""
						/>
						{track.name} - {track.artist}
						<button
							onClick={() =>
								removeSong(
									track
								)
							}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
			<div className="playlist-buttons">
				<button onClick={onSave}>
					Save to Spotify
				</button>
				<button onClick={clearPlaylist}>
					Clear Playlist
				</button>
			</div>
		</div>
	);
}

export default Playlist;
