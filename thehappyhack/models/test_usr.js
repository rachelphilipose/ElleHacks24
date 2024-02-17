const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const User = require('./user'); // Assuming your user model is defined in a separate file
const app = express()
app.use(express.json())
app.use(cors())

const URI = process.env.MONGODB_URL

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// Connect to MongoDB
mongoose.connect(URI, {})  .then(() => {
    console.log('Connected to MongoDB');
    
    // Create a new user document
    const newUser = new User({
      username: 'john_doe',
      password: 'password123',
      email: 'john@example.com',
      number: '1234567890',
      friends: [] // Optionally, add friends
    });

    // Save the user document to the database
    newUser.save()
      .then(savedUser => {
        console.log('User saved to database:', savedUser);

        // Query the database to verify
        User.find()
          .then(users => {
            console.log('All users in the database:', users);
            mongoose.connection.close(); // Close the connection when done
          })
          .catch(error => {
            console.error('Error querying users:', error);
            mongoose.connection.close(); // Close the connection on error
          });
      })
      .catch(error => {
        console.error('Error saving user to database:', error);
        mongoose.connection.close(); // Close the connection on error
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });