import express from "express";
import sql from "./db.mjs";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/v1/movies", async (req, res) => {
  try {
    const movies = await sql`select * from watchedmovies`;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
