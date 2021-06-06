import dotenv from 'dotenv'
import connectToDb from './config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import Order from './models/Order.js'
import Product from './models/Product.js'
import User from './models/User.js'


dotenv.config()

connectToDb()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('data imported')

        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('data destroyed')

        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}