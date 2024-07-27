//載入express
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//載入handlebars
app.engine('.hbs', engine({extname: '.hbs'})) //設置新的模板引擎
app.set('view engine', '.hbs') //使用.hbs作為默認樣板引擎
app.set('views', './views') //設置模板文件的目錄

//設定靜態文件資源
app.use(express.static('public'))

//設定路由
app.get('/', (req , res) => {
  res.redirect('/movies')
})

//靜態路由
app.get('/movies',(req , res) =>{
  res.render('index')
})

//動態路由
app.get('/movies/:id',(req , res)=>{
  const id = req.params.id
  res.send(`read movie:${id}`)
})

//監聽port是否被trigger
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

