const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/score', require('./routes/score.routes'))

const PORT = config.get('port') || 5000

async function start(){
  try {
    await mongoose.connect(config.get('mongoUri'),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    
    app.listen(PORT, () => console.log(`Port ${PORT} is running!`))
  } catch (e) {
    console.log('Sever error:', e.message)
    process.exit(1)
  }
}

start()