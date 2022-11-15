const mongoose = require('mongoose')
const DB = "mongodb+srv://Fakhar:042069454@cluster0.ceb9lzw.mongodb.net/test"

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then( () => {
    console.log('MongoDB Server Connected Successfully')
}).catch( () => {
    console.log('MongoDB Server not Connected ')
})