const User = require('../Models/userSchema')


exports.saveForm = async (req, res)=>{

    let NewUser = new User()

    NewUser.name1 = req.body.name1
    NewUser.name2 = req.body.name2
    NewUser.email = req.body.email
    NewUser.phone = req.body.phone
    NewUser.password = req.body.password

    let dbuser = await NewUser.save()

    res.json(dbuser)

}

exports.getUsers = async (req, res)=>{
    const allusers = await User.find()
    res.json(allusers)
}