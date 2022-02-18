const express = require('express')
const path = require('path')
const app = express()
const dataEs = require('./database/DATA')

app.set('port',5000)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())



app.get('/data',async(req,res)=>{
const x = await dataEs.find() 
res.json(x) 
})

app.get('/data/:id',async(req,res)=>{
  const x = await dataEs.findById(req.params.id) 
  res.json(x) 
  })

app.post('/data',async(req,res)=>{
const x= dataEs(req.body)
await x.save();
res.json({resposive:"Dato recivido"})
})

app.put('/data/:id', async(req,res)=>{
  await dataEs.findByIdAndUpdate(req.params.id,req.body)
  res.json({responsive:"Dato actualizado"})

})

app.delete('/data/:id', async(req,res)=>{
  await dataEs.findByIdAndDelete(req.params.id)
  res.json({responsive:"Dato borrado"})
})

app.listen(app.get('port'), console.log("servidor en puerto",app.get('port') ))