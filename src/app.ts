import express from 'express';
import connectDB from './config/db';
import userRoutes from './routers/user';
import expenseRoutes from './routers/expense';
import categoryRoutes from './routers/category';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const cors = require("cors");
// Connect to database
connectDB();

// Middleware
app.use(cors({}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/categories', categoryRoutes);

app.get("/", (req, res) => {
    res.send("Hello, Express!");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
