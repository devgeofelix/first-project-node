const express = require ('express')

const app = express()
const port = 3000

app.get ("/users", (request, response) => {
    const {name, age, profissao} = request.query
    

    return response.json ({name: name, age: age, profissao: profissao})
    


})

app.listen(port, () => {
    console.log ( `  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

})