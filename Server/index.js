import express from 'express'
import cors from 'cors'
import { connectToDatabase } from "./lib/db.js";
const app = express();
app.use(cors())
app.use(express.json())

app.listen(process.env.DB_PORT, async () => {
    console.log("server is running on port 3306");
    try {
        await connectToDatabase();

    } catch (error) {
        console.log("Failed to intialize the database", error)
        
    }
});