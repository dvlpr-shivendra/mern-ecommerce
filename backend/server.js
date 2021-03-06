import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectToDb from "./config/db.js";
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectToDb()

const app = express()

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(process.env.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))