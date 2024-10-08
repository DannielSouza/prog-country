import express from "express";
import http from "http";
import countryRoutes from "./routes/country-routes";
import cors from "cors";

// START CONFIIG
const app = express();
const httpServer = http.createServer(app);
require("dotenv").config();

// EXPRESS CONFIG
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: false,
  })
);

// ROUTES
app.use("/country", countryRoutes);

httpServer.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
