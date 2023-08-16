const UserContorller = require('./contorller/UserController')

module.exports = (app) => {

    app.get('/users',UserContorller.index),

    app.post('/user',UserContorller.create),

    app.put('/user/:userId',UserContorller.put)

    app.delete('/user/:userId',UserContorller.delete)

    app.get('/user/:userId',UserContorller.show)

    
}