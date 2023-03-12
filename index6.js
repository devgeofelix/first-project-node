app.put("/users/id:", (request, response) => {
    const { id } = request.params
    const { name, age } = request.body
    const updateUser = {id, name, age}
    const posicaodoArray = users.findIndex (user => user.id === id)

    if (posicaodoArray < 0) {
        return response.status(404).json({message: 'user not found'})
           }

    console.log (posicaodoArray)

    return response.json(users)

})

app.listen(port, () => {
    console.log(`  🚀   🏡  🚗  👨‍👦‍👦  💻   O servidor iniciou usando a porta ${port}`)

})