const express = require ('express')

const app = express()
const port = 3000

app.get ("/users/:id", (request, response) => {

    const {id} = request.params

    console.log (id)

    return response.json ({id})
    


})

app.listen(port, () => {
    console.log ( `  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

})