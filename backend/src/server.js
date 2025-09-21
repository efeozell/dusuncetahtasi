// import express from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json()); //middleware //Json formatindaki objeyi JS'e ceviriyor.
app.use(rateLimiter); //middleware ratelimiter

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT); //Serveri 5001 portunda calistiriyorum.
  });
});
