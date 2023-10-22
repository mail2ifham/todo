import express from 'express'


const app = express()
const port= 3000
const itemList = []

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render('index.ejs',{itemList:itemList,})
})
app.get("/work", (req, res) => {
    res.render("work.ejs")
})

app.post("/", (req, res) =>{
    const newItem = req.body["add-felid"];
    itemList.push(newItem)
    res.render('index.ejs',{itemList:itemList})
})

app.post("/work", (req, res) =>{
    const newItem = req.body["add-felid"];
    itemList.push(newItem)
    res.render('work.ejs',{itemList:itemList})
})


app.listen(port, () => {
    console.log(`Listen to port ${port}...`);
} )