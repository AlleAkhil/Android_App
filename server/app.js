const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB connection
mongoose.connect('mongodb+srv://akhilallepc:android@android.z00zjoo.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User model
const User = mongoose.model('User', {
  email: String,
  password: String
});

// Middleware
app.use(bodyParser.json());

// Login route
app.post('/loginUser', async (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  
    // Compare passwords
    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  
    // Create and return JWT token
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  });
  

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
