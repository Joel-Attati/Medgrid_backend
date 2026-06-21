import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.js'; // Points to the config folder with .js extension
import authRoutes from './modules/auth/auth.routes.js'; // Points to the auth.routes file with .
import inventoryRoutes from './modules/inventory/inventory.routes.js'; // Points to the inventory.routes file with .js extension

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);

// Test Route


app.listen(port, () => {
  console.log(`Express + TypeScript server running on http://localhost:${port}`);
});