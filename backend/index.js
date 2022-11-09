const express = require("express")
const app = express()
const db = {
    users: [
        {id: 0,
        username:"sang"},
        {id: 1,
        username:"long"}
    ]
}
app.get("/", (req,res)=>{
    res.send("HELLLO")
})
app.get("/users", (req, res)=>{
    res.json(db.users)
})

app.listen(3001)