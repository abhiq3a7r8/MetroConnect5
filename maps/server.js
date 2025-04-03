import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function getDb() {
  await client.connect();
  return client.db("mapsDB");
}

// Get nearby places
app.get("/places", async (req, res) => {
  const { lat, lon, radius } = req.query;
  const db = await getDb();
  const places = await db.collection("locations").find({
    geometry: {
      $near: {
        $geometry: { type: "Point", coordinates: [parseFloat(lon), parseFloat(lat)] },
        $maxDistance: parseInt(radius) || 1000 // Default 1km radius
      }
    }
  }).toArray();
  res.json(places);
});

// Serve tiles (Optional)
app.get("/map/tiles/:z/:x/:y.png", async (req, res) => {
  // You can use an external tile service like OpenStreetMap or Mapbox
  res.redirect(`https://tile.openstreetmap.org/${req.params.z}/${req.params.x}/${req.params.y}.png`);
});

app.listen(5000, () => console.log("Server running on port 5000"));
