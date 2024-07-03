const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = 'https://ckola99.github.io/JammmingApp/';
let accessToken;

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}

		// Check for access token match
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);

			// Clear the parameters from the URL
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},

	async search(term) {
		const accessToken = Spotify.getAccessToken();
		const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		const jsonResponse = await response.json();
		if (!jsonResponse.tracks) {
			return [];
		}

		return jsonResponse.tracks.items.map(track => ({
			id: track.id,
			name: track.name,
			artist: track.artists[0].name,
			album: track.album.name,
			uri: track.uri,
			imageUrl: track.album.images[0]?.url
		}));
	},

	async savePlaylist(name, trackUris) {
		if (!name || !trackUris.length) {
			return;
		}

		const accessToken = this.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		try {
			// Get the user's ID
			const response = await fetch('https://api.spotify.com/v1/me', { headers });
			const userData = await response.json();
			const userId = userData.id;

			// Create a new playlist for the user
			const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
				headers,
				method: 'POST',
				body: JSON.stringify({ name })
			});
			const playlistData = await createPlaylistResponse.json();
			const playlistId = playlistData.id;

			// Add tracks to the newly created playlist
			await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
				headers,
				method: 'POST',
				body: JSON.stringify({ uris: trackUris })
			});

		} catch (error) {
			console.error('Error saving playlist:', error);
		}
	}
};

export default Spotify;
