import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB connected: ${connection.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectToDb