const express = require('express')
const app = express()
const port = 3000

//設定靜態文件資源
app.use(express.static('public'))

//設定路由
app.get('/', (req , res) => {
  res.redirect('/movies')
})

//靜態路由
app.get('/movies',(req , res) =>{
  res.send('listing movies')
})

//動態路由
app.get('/movies/:id',(req , res)=>{
  const id = req.params.id
  res.send(`read movie:${id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

