const express = require ('express')

const app = express()
const port = 3000

app.get ("/users", (request, response) => {

    return response.send (' Hello Geovane Tomazi da Silva')
    


})

app.listen(port, () => {
    console.log ( `  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

})