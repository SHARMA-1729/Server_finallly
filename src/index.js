import dotenv from "dotenv";
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
});

// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : 4000`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// Vercel will automatically handle the port, so export app
export default app;
