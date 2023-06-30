const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { Transaction } = require('./schemas/Transaction')


const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {

  await Transaction.create({
    amount: 12.50,
    reference: 'ref#01',
    date: new Date().toString()
  })  

  res.send("Olá mundo")
})

app.post('/transaction', async (req, res) => {
  
  let userData = req.body;

  await Transaction.create({
    valor: userData.value,
    referencia: userData.reference,
    data: userData.date
  })

  res.sendStatus(200)
})


app.get('/transactions', async(req, res) => {
  // ORM chamando a tabela de transações
  let query = await Transaction.find()
  console.log(query)
  res.json(query)
})

const PORT = 3000


const serverInit = async () => {
  await mongoose.connect(
    'mongodb+srv://murilosertorio:murilo123@cluster0.fkvxfvl.mongodb.net/?retryWrites=true&w=majority')

  app.listen(PORT, async () => {

    console.log("Running at http://localhost:" + PORT)
  })

}

serverInit()