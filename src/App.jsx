import React, { useState } from "react";
import "./App.css";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import Spotify from "./util/spotify";

function App() {
	const [results, setResults] = useState([]);
	const [playlistTitle, setPlaylistTitle] = useState("");
	const [playlistTracks, setPlaylistTracks] = useState([]);

	const removeSong = (song) => {
		setPlaylistTracks(
			playlistTracks.filter((track) => song.id !== track.id)
		);
	};

	const clearSongs = () => {
		setPlaylistTracks([]);
	};

	const clearSearch = () => {
		setResults([])
	}

	const addToPlaylist = (song) => {
		setPlaylistTracks((prevPlaylistTracks) => [
			...prevPlaylistTracks,
			song,
		]);
	};

	const handleTitleChange = (event) => {
		setPlaylistTitle(event.target.value);
	};

	const savePlaylist = async () => {
		const trackURIs = playlistTracks.map((track) => track.uri);
		await Spotify.savePlaylist(playlistTitle, trackURIs);
		setPlaylistTracks([]);
		setPlaylistTitle("");
	};

	const onSearch = async (term) => {
		const searchResults = await Spotify.search(term);
		setResults(searchResults);
	};

	return (
		<div className="app">
			<header className="header">
				<h1>
					JA<span>MMM</span>IN!
				</h1>
				<p className="subtitle">Powered by Spotify</p>
			</header>
			<div className="content">
				<SearchBar
					onSearch={onSearch}
					clear={clearSearch}
				/>
				<div className="main">
					<SearchResults
						tracks={results}
						addToPlaylist={addToPlaylist}
					/>
					<Playlist
						title={playlistTitle}
						playlistTracks={playlistTracks}
						removeSong={removeSong}
						onTitleChange={
							handleTitleChange
						}
						onSave={savePlaylist}
						clearPlaylist={clearSongs}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
