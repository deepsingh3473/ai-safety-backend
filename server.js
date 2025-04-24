import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import incidentRoutes from "./routes/incident.route.js";

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/incidents", incidentRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
    connectDB();
});