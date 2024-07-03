import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar({ onSearch, clear }) {
	const [searchTerm, setSearchTerm] = useState("");

	const passTerm = () => {
		onSearch(searchTerm)
	}

	const handleTermChange = (event) => {
		setSearchTerm(event.target.value);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			passTerm();
		}
	}

	const handleClick = () => {
		clear()
		setSearchTerm("")
	}

	return (
		<div className="container">
			<input
				type="text"
				placeholder="Enter A song, Album, or Artist"
				onChange={handleTermChange}
				value={searchTerm} //controlling the component
				onKeyDown={handleKeyDown}
			/>
			<button onClick={passTerm} >SEARCH</button>
			<button onClick={handleClick}>CLEAR</button>
		</div>
	);
}

export default SearchBar;
