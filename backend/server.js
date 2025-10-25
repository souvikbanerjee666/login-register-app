import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use('/uploads', express.static('public/uploads'));

// Routes
app.use('/api', authRoutes);
app.use('/api', uploadRoutes);

app.get("/",(req,res)=>{
    res.send("my app")
})

// Connect to database and start server
const startServer = async () => {
    await connectDB();
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
};

startServer();