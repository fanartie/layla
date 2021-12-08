
import 'semantic-ui-css/semantic.min.css';
import { Routes, Route } from "react-router-dom";

import ArtistBrowse from "../ArtistBrowse";
import Artist from "../Artist";
import Album from "../Album";

function App() {
  return (
      <Routes>
          <Route path="/" element={<ArtistBrowse />} />
          <Route path="/artist/:artistId" element={<Artist />} />
          <Route path="/album/:artistId/:albumId" element={<Album />} />
      </Routes>
  );
}

export default App;
