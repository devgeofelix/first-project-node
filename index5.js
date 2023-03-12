const express = require('express')

const app = express()
const port = 3000
app.use (express.json())

app.get("/users", (request, response) => {

    const {name,age} = request.body

    return response.json ({name,age})
    


    console.log(request.body)

    return response.json({message: "ok"})

})

app.listen(port, () => {
    console.log(`  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

})