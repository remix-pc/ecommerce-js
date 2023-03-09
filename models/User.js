const db = require('../database/Database')
const bcrypt = require('bcrypt')
 

class User{

    //Método de criação de Usuário
    async create(cpf, email, password, name, userName){
        try{

            let hash = await bcrypt.hash(password, 10)
            await db.insert({cpf, email, password: hash, userName, name, adm: 0}).table('user')


        }catch(error) {
            console.log(error)
        }
    }


    //Método para encontrar todos os usuários
    async findAllUsers() {

        try{

            let result = await db.select("cpf", "email", "name", "userName", "adm").table('user')

            console.log(result)

            return result

        }catch(error) {
            console.log(`Erro: ${error}`)
            return undefined
        }
    }

   
    //Método para verificação de Email
    async findByEmail(email) {

        try{
            let user = await db.select("cpf", "email", "name", "userName", "adm").where({email: email}).table('user')


            if(user.length > 0) {
                 return user[0]
            }else {
                return undefined
            }
        } catch (erro){
            console.log(erro)
        }
        
    }

    //Método para verificação de CPF
    async findByCpf(cpf) {
        
        try{
            let user = await db.select("cpf", "email", "name", "userName", "adm").where({cpf: cpf}).table('user')

            if(user.length > 0) {
                 return user[0]
            }else {
                return undefined
            }
        } catch (erro){
            console.log(erro)
        }
    }




}

module.exports = new User()