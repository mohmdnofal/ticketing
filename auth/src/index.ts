import mongoose from 'mongoose';
//added a comment to test PRs

import { app } from './app';

const start = async () => {
    console.log('Starting up........');
    if (!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defind');
    }
    if (!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defind');
    }
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
    app.listen(3000, () => {
        console.log('Listening on port 3000!!!!!!!!');
      });
    
    };

start();

