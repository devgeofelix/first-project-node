const express = require('express')
const uuid = require('uuid')

const app = express()
const port = 3000
app.use(express.json())



const users = []

app.get("/users", (request, response) => {
    return response.json(users)

})
app.post("/users", (request, response) => {

    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})

app.put("/users/id:", (request, response) => {
        const { id } = request.params
        const { name, age } = request.body
        const updateUser = {id, name, age}
        const posicaodoArray = users.findIndex (user => user.id === id)

        if (posicaodoArray < 0) {
            return response.status(404).json ({message: 'User not found'})
               }

        users [posicaodoArray] = updateUser

        return response.json(updateUser)

    })

    app.listen(port, () => {
        console.log(`  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

    })