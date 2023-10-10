const Contact = require("../models/contact")

module.exports.getContact = async (req, res) => {
    console.log('get')

    try {
        const contact = await Contact.find()

        if (!contact){
            res.status(400).json({error: "Contact does not exists"})
        }
        else {
            res.status(200).json({result:contact})
        }

    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error:"An error has occured"})
    }
}

module.exports.createContact = async(req, res) => {
    console.log('create')

    let {id, fName, lName, email, phone, imageUrl} = req.body

    try{
        const contact = await Contact.findOne({id:id})
        if (contact){
            res.status(400).json({error:"Email already exists"})
            return
        }

        const result = await Contact.create({id, fName, lName, email, phone, imageUrl})
        
        console.log(result)

        res.status(200).json({result: "success"})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error:"An error has occured"})
    }
}

module.exports.updateContact = async(req, res) => {
    console.log('update')

    let {id, fName, lName, email, phone, imageUrl} = req.body

    let updateBody = {}

    if (fName) updateBody.fName = fName
    if (lName) updateBody.lName = lName
    if (email) updateBody.email = email
    if (phone) updateBody.phone = phone
    if (imageUrl) updateBody.imageUrl = imageUrl

    try{
        await Contact.updateOne({id:id}, updateBody)
        res.status(200).json({result:"success"})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error:"An error has occured"})
    }
}

module.exports.deleteContact = async(req, res) => {
    console.log('delete')

    let {id} = req.body

    try{
        const contact = await Contact.deleteOne({id:id})
        res.status(200).json({result:"success"})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error:"An error has occured"})
    }
}