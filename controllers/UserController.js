const User = require('../models/User')

class UserController {

    async Create(req, res) {
        var {cpf, email, name, password, userName} = req.body

        if(email == undefined) {
            res.status(403)
            res.json({erro: "E-mail inválido"})
        }

        let existEmail = await User.findByEmail(email)
        let existCpf = await User.findByCpf(cpf)


        if(existEmail){
            res.status(406)
            res.json({erro: "Email já cadastrado"})
        }else if(existCpf){
            res.status(406)
            res.json({erro: "Cpf já cadastrado."})
        } else{
            await User.create(cpf, email, password, name, userName)
            res.status(200)
            res.json("Cadastrado.")
        }
    }


    async FindAllUsers(req, res) {

        let users = await User.findAllUsers()
        res.json(users)

    }

    

}

module.exports = new UserController()
