# Jammming App

## App view

![](src\assets\screencapture-ckola99-github-io-2024-07-03-19_17_51.png)

## Purpose of This Project

The Jammming App is a React-based web application that allows users to search for songs, view detailed information about each song, and create custom playlists that can be exported to their personal Spotify account. This project leverages the Spotify API to provide a rich music search and playlist creation experience.

## Technologies Used

- **React**: For building the user interface
- **JavaScript**: Core programming language for the app
- **CSS**: For styling the application
- **HTML**: Structure of the web application
- **Spotify API**: For fetching song data and managing playlists
- **Jest**: For unit testing
- **Enzyme**: For component testing
- **ESLint**: For code linting

## Features

- **Search Functionality**: Users can search for songs by song title.
  - You can also include functionality to search by other attributes like artist’s name, genre, etc.
- **Song Information**: Users can see information about each song like title, artist, and album for songs they queried.
  - You can also include other information – the design is up to you.
- **Playlist Management**: Users can add songs to a custom playlist.
  - Users can export their custom playlist to their personal Spotify account.
- **Responsive Design**: The application is designed to be responsive and work on various devices.

## Future Work

- **Enhanced Search Filters**: Add filters for searching by artist, genre, album, etc.
- **User Authentication**: Improve the authentication flow to handle various edge cases.
- **Playlist Sharing**: Allow users to share their playlists with others.
- **Improved UI/UX**: Continuously enhance the user interface for a better experience.
- **Error Handling**: Improve error handling and provide user feedback for various actions.
- **Adding a previewer**: Add a playback feature to preview music.
- **Proper Testing**: Fixing my environment to create more and better tests.

## Prerequisites

To work on this project, you should have a basic understanding of the following:

- **HTML**: Structure of web pages
- **CSS**: Styling web pages
- **JavaScript**: Programming language for web development
- **React**: JavaScript library for building user interfaces
- **HTTP Requests and Responses**: Understanding how to interact with APIs
- **Authentication**: Basic understanding of user authentication and authorization

## Getting Started

1. **Clone the Repository**: Clone this repository to your local machine.
   ```sh
   git clone https://github.com/your-username/jammming-app.git
   ```
2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.
   ```sh
   cd jammming-app
   npm install
   ```
3. **Run the Application**: Start the development server.
   ```sh
   npm start
   ```
4. **Run Tests**: Run the test suite to ensure everything is working correctly.
   ```sh
   npm test
   ```

## Project Structure

```
jammming-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├
│   ├── App.js
│   ├── SearchBar.js
│   ├── Playlist.js
│   ├── Track.js
│   |── ...
│   ├── util/
│   │   └── spotify.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── test/
│   ├── App.test.js
│   ├── SearchBar.test.js
│   └── ...
├── .eslintrc.js
├── package.json
├── README.md
└── ...
```


## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Your contributions are always welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue on the repository.
