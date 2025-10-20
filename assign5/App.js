import './App.css';
import React, { useState } from "react";

function Song({ title, artist }) {
  return (
    <li>
      {title} - <i>{artist}</i>
    </li>
  );
}

export default function App() {
  const [songs, setSongs] = useState([
    { title: "Kesariya", artist: "Pritam" },
    { title: "O Maahi", artist: "Arijit Singh" },
  ]);

  const [newSong, setNewSong] = useState("");
  const [newArtist, setNewArtist] = useState("");

  function addSong() {
    if (newSong && newArtist) {
      setSongs([...songs, { title: newSong, artist: newArtist }]);
      setNewSong("");
      setNewArtist("");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🎵 My Music List</h2>
      <input
        type="text"
        placeholder="Song name"
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={newArtist}
        onChange={(e) => setNewArtist(e.target.value)}
      />
      <button onClick={addSong}>Add Song</button>

      <ul>
        {songs.map((s, index) => (
          <Song key={index} title={s.title} artist={s.artist} />
        ))}
      </ul>
    </div>
  );
}
