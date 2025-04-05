const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Serve GeoJSON file
app.get('/data/stations', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'stations.geojson'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
