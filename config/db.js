const mongoose = require('mongoose')



const MONGOURI = 'mongodb+srv://vladdic:<password>@cluster0-aidmt.mongodb.net/test?retryWrites=true&w=majority'

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true 
        })
        console.log('Connected to DB !!!')
    } catch (error) {
        console.log(error)
        throw error 
    }
}



module.exports = InitiateMongoServer 