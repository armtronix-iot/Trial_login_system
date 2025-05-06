const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// CORS configuration using env FRONTEND_URL
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  credentials: true, // If using cookies/session
};
app.use(cors(corsOptions));

// Express middlewares
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");
    // app.listen(PORT, () => {
    //   console.log(`🚀 Server running on https://192.168.1.220:${PORT}`);
    // });
    app.listen(PORT, '192.168.1.220', () => {
        console.log(`🚀 Server running on http://192.168.1.220:${PORT}`);
      });
      
       
})
  .catch(err => console.error("❌ Mongo Error:", err));
