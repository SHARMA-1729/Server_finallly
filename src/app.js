import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Set up CORS policy
app.use(cors({
    origin: "*",  // Replace "*" with `process.env.CORS_ORIGIN` in production for specific allowed origins
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"]
}));

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import Routes
import userRouter from "./routes/user.routes.js";
// import foodRouter from "./routes/fooditem.routes.js";
// import foodrestaurant from './routes/restaurant.routes.js';
// import menuRouter from './routes/menu.routes.js';

app.use("/api/v1/users", userRouter);
// app.use('/api/v1/foods', foodRouter);
// app.use('/api/v1/resto', foodrestaurant);
// app.use('/api/v1/resto/:id', foodrestaurant);
// app.use('/api/v1/menu/:id', menuRouter);
// app.use('/api/v1/menu/', menuRouter);

// Root route
app.get('/', (req, res) => {
    console.log("Root endpoint reached");
    res.send("Hello, world!");  // Sending a response to the client
});

// Export app for Vercel
export { app };
